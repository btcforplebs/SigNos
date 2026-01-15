import { defineConfig } from 'tsup';

const external = [
    'better-sqlite3',
    'bcrypt',
    'prisma',
    '@prisma/client',
    '@prisma/adapter-better-sqlite3',
    'ws',
    'websocket-polyfill'
];

export default defineConfig({
    entry: {
        'index': 'src/index.ts',
        'daemon/index': 'src/daemon/index.ts',
        'client/client': 'src/client.ts'
    },
    outDir: 'dist',
    format: ['cjs'],
    splitting: false,
    sourcemap: true,
    clean: true,
    // Native modules must be external. We don't use 'external' property
    // to avoid it taking precedence over noExternal bundling.
    noExternal: [
        /@prisma\/adapter-better-sqlite3/,
        /@prisma\/client-runtime-utils/,
        /^((?!better-sqlite3|bcrypt).)*$/
    ],
    // We still want to mark native modules as external in the final bundle
    external: ['better-sqlite3', 'bcrypt'],
});
