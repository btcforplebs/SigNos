import { app, BrowserWindow, Menu } from 'electron';
import * as path from 'path';
import { fork, ChildProcess } from 'child_process';
import log from 'electron-log';
import * as fs from 'fs';

// Configure logging
log.transports.file.level = 'info';
log.transports.console.level = 'debug';

// Determine paths
const isDev = !app.isPackaged;

// Add a specific log file in the workspace for debugging
const debugLogPath = isDev
    ? path.join(__dirname, '../../../desktop-debug.log')
    : '/Users/logandetty/signet/desktop-debug.log';
log.transports.file.resolvePathFn = () => debugLogPath;

let mainWindow: BrowserWindow | null = null;
let daemonProcess: ChildProcess | null = null;
let uiProcess: ChildProcess | null = null;
let nodePath: string = '';

// Set app name
app.name = 'Signet';

const resourcesPath = isDev ? path.join(__dirname, '../../..') : process.resourcesPath;
// In Dev: __dirname is apps/desktop/dist. Root is ../.. . Monorepo root is ../../..
// In Dev, we want to point to apps/signet/dist and apps/signet-ui/dist

let daemonEntry: string;
let uiScript: string;

if (isDev) {
    daemonEntry = path.join(resourcesPath, 'apps/signet/dist/daemon/index.js'); // Assuming tsup output structure
    // tsup src/daemon/index.ts -d dist/daemon -> dist/daemon/index.js

    // "signet": "node dist/index.js" -> CLI
    // "tsup src/daemon/index.ts -d dist/daemon" -> dist/daemon/index.js

    uiScript = path.join(resourcesPath, 'apps/signet-ui/server.mjs');
} else {
    // In Prod: Resources/daemon/index.js (CLI) & Resources/ui/dist-server/server.cjs
    daemonEntry = path.join(resourcesPath, 'daemon/index.js');
    uiScript = path.join(resourcesPath, 'ui/dist-server/server.cjs');
}

// Log paths for debugging
log.info('isDev:', isDev);
log.info('Resources Path:', resourcesPath);
log.info('Daemon Entry:', daemonEntry);
log.info('UI Script:', uiScript);

// Calculate NODE_PATH once
const asarPath = path.join(resourcesPath, 'app.asar', 'node_modules');
const asarUnpackedPath = path.join(resourcesPath, 'app.asar.unpacked', 'node_modules');
nodePath = isDev ? (process.env.NODE_PATH || '') : `${asarUnpackedPath}:${asarPath}`;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 800,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
        },
        icon: isDev
            ? path.join(resourcesPath, 'apps/signet-ui/public/favicon.svg')
            : path.join(resourcesPath, 'ui/public/favicon.svg')
    });

    // Load the UI
    // The UI server (server.mjs) listens on 4174 by default.
    // We need to wait for it.
    const loadUrl = () => {
        log.info('Attempting to load UI at http://localhost:4174...');
        mainWindow?.loadURL('http://localhost:4174').catch((err) => {
            log.warn('UI not ready yet, retrying in 1s...', err.message);
            setTimeout(loadUrl, 1000);
        });
    };

    setTimeout(loadUrl, 2000);

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

function startDaemon() {
    // We need to load config to send it.
    // Or... can we just tell it to load its own config?
    // The daemon expects a 'DaemonBootstrapConfig' message.

    // WORKAROUND: The daemon wrapper logic is in the CLI (commands/start.ts).
    // The actual daemon entry (dist/daemon/index.js) just sets up listeners and waits for config.
    // So we MUST send configuration.
    // Loading config involves 'fs' and homedir, which we can do here.

    // BUT: The types and config logic are in the signet package.
    // Import them? We can try to import the config loading logic if we copied the files that support it.
    // commands/start.ts imports ../config/config.js.
    // Start Daemon
    log.info('Starting Daemon via CLI...');

    // We use the CLI entry because it handles config loading and process forking correctly.
    // Dependencies are now bundled into the JS file (except native modules), so we don't need complex NODE_PATH.
    // Native modules (better-sqlite3) are in app.asar.unpacked/node_modules or similar, resolved by Electron or require.

    // Ensure we set NODE_PATH for native modules if needed. 
    // If better-sqlite3 is external, it will try to require('better-sqlite3').
    // Electron should find it in app.asar/node_modules (unpacked).

    // Ensure we set NODE_PATH for native modules.
    log.info('NODE_PATH:', nodePath);
    log.info('Using execPath:', process.execPath);

    const daemonEnv = {
        ...process.env,
        FORCE_COLOR: '1',
        NODE_PATH: nodePath,
        ELECTRON_RUN_AS_NODE: '1'
    };

    daemonProcess = fork(daemonEntry, ['start'], {
        execPath: process.execPath,
        cwd: resourcesPath,
        env: daemonEnv,
        stdio: 'pipe'
    });

    daemonProcess.stdout?.on('data', (data: Buffer) => log.info(`[DaemonWrapper] ${data.toString()}`));
    daemonProcess.stderr?.on('data', (data: Buffer) => log.error(`[DaemonWrapper] ${data.toString()}`));
}

function startUi() {
    log.info('Starting UI Server...');
    log.info('UI Script:', uiScript);

    if (!fs.existsSync(uiScript)) {
        log.error('UI script not found at', uiScript);
        return;
    }

    uiProcess = fork(uiScript, [], {
        execPath: process.execPath,
        cwd: resourcesPath,
        env: {
            ...process.env,
            PORT: '4174',
            DAEMON_URL: 'http://localhost:3000',
            ELECTRON_RUN_AS_NODE: '1',
            NODE_PATH: nodePath
        },
        stdio: 'pipe'
    });

    uiProcess.stdout?.on('data', (data: Buffer) => log.info(`[UI] ${data.toString()}`));
    uiProcess.stderr?.on('data', (data: Buffer) => log.error(`[UI] ${data.toString()}`));
}

function setupMenu() {
    const template: Electron.MenuItemConstructorOptions[] = [
        {
            label: app.name,
            submenu: [
                { role: 'about' },
                { type: 'separator' },
                { role: 'services' },
                { type: 'separator' },
                { role: 'hide' },
                { role: 'hideOthers' },
                { role: 'unhide' },
                { type: 'separator' },
                { role: 'quit' }
            ]
        },
        {
            label: 'Edit',
            submenu: [
                { role: 'undo' },
                { role: 'redo' },
                { type: 'separator' },
                { role: 'cut' },
                { role: 'copy' },
                { role: 'paste' },
                { role: 'selectAll' }
            ]
        },
        {
            label: 'View',
            submenu: [
                { role: 'reload' },
                { role: 'forceReload' },
                { role: 'toggleDevTools' },
                { type: 'separator' },
                { role: 'resetZoom' },
                { role: 'zoomIn' },
                { role: 'zoomOut' },
                { type: 'separator' },
                { role: 'togglefullscreen' }
            ]
        },
        {
            role: 'window',
            submenu: [
                { role: 'minimize' },
                { role: 'close' }
            ]
        }
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
}

app.whenReady().then(() => {
    startDaemon();
    startUi();
    createWindow();
    setupMenu();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('before-quit', () => {
    if (daemonProcess) daemonProcess.kill();
    if (uiProcess) uiProcess.kill();
});
