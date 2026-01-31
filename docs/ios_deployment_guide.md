# iOS Deployment Guide (Xcode)

This guide covers how to run the Signet app directly on your iPhone using Xcode. This is the recommended way for development and debugging.

## Prerequisites

1.  **Mac with Xcode**: Required for building and deploying.
2.  **iOS Device**: Connected to your Mac via USB or same Wi-Fi.
3.  **Apple ID**: Signed into Xcode (Preferences > Accounts).

## Step 1: Build the Web Assets

In your terminal on the Mac:

```bash
cd apps/signet-ui
pnpm run build
pnpm exec cap sync ios
```

## Step 2: Open and Configure Xcode

1.  Open the iOS project: `pnpm exec cap open ios`.
2.  In Xcode's left sidebar, select the **App** project (the blue icon at the top).
3.  In the main window, go to the **Signing & Capabilities** tab.
4.  Select your **Team** (e.g., "Your Name (Personal Team)").
5.  If you see an error about the Bundle Identifier, change it to something unique (e.g., `com.yourname.signet`).

## Step 3: Run on Your Device

1.  Unlock your iPhone and connect it to your Mac.
2.  In the top toolbar of Xcode, click the device name next to the "App" target and select your physical iPhone.
3.  Click the **Play button (Run)** or press `Cmd + R`.
4.  **Trust the Developer**:
    *   On your iPhone, go to **Settings > General > VPN & Device Management**.
    *   Tap your Apple ID under "Developer App".
    *   Tap **Trust**.
5.  The app will launch automatically.

## Re-Syncing Changes

Whenever you make changes to the code in this editor:
1. Run the build/sync command:
   ```bash
   cd apps/signet-ui && pnpm run build && pnpm exec cap sync ios
   ```
2. In Xcode, just click **Run** (Play button) again. It will automatically re-deploy the updated code to your phone.

## Background Connection Tip

To ensure Signet stays connected to relays in the background, the app uses a persistent connection. If iOS kills the app, you may need to re-open it to resume listening for requests.
