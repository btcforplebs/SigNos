# iOs Sideloading Guide

This guide explains how to install the Signet app on your iPhone without using the App Store or TestFlight. This is useful for testing on your personal device or distributing the app to a limited number of devices.

> [!NOTE]
> **Free Apple Developer Accounts**: If you use a free Apple ID, the app will expire every **7 days**. You must refresh it (re-install) weekly. Paid developer accounts ($99/year) last for 1 year.

## Prerequisites

1.  **Mac with Xcode**: To build the `.ipa` file.
2.  **iOS Device**: Connected to your computer.
3.  **Apple ID**: For signing the app.
4.  **Sideloading Tool**: We recommend [AltStore](https://altstore.io/) or [Sideloadly](https://sideloadly.io/).

---

## Part 1: Generate the .ipa File

Before you can sideload, you need to package the app into an `.ipa` file.

1.  **Prepare the Build**:
    Open your terminal in the project root and run:
    ```bash
    cd apps/signet-ui
    pnpm run build
    pnpm exec cap sync ios
    ```

2.  **Open Xcode**:
    ```bash
    pnpm exec cap open ios
    ```

3.  **Archive the App**:
    *   In Xcode, verify your destination is set to **Any iOS Device (arm64)**.
    *   Go to **Product > Archive**.
    *   Wait for the build to complete. The "Organizer" window will open.

4.  **Export the IPA**:
    *   Select the latest archive in the Organizer.
    *   Click **Distribute App**.
    *   Select **Custom** (or "Ad Hoc" / "Development") -> Next.
    *   Select **App Thinning**: *None* -> Next.
    *   Keep **Re-sign**: *Automatically manage signing* -> Next.
    *   Click **Export**.
    *   Save the folder. Inside, you will find `App.ipa`.

---

## Part 2: Install via AltStore (Recommended)

AltStore allows you to sign and install `.ipa` files and can refresh them wirelessly.

1.  **Install AltServer**: Download from [altstore.io](https://altstore.io/) and install on your Mac.
2.  **Install AltStore on Phone**:
    *   Launch AltServer.
    *   Connect your iPhone to your Mac.
    *   Click the AltServer icon in the menu bar > **Install AltStore** > [Your Phone].
    *   Log in with your Apple ID when prompted.
3.  **Trust Developer**: On iPhone, go to **Settings > General > VPN & Device Management** and trust your Apple ID.
4.  **Transfer IPA**:
    *   AirDrop or copy the generated `App.ipa` to your iPhone (e.g., save to Files app).
5.  **Install in AltStore**:
    *   Open the **AltStore** app on your phone.
    *   Go to the **My Apps** tab.
    *   Tap the **+** button in the top left.
    *   Select your `App.ipa`.
    *   AltStore will sign and install it.

---

## Part 3: Install via Sideloadly (Alternative)

Sideloadly is a simple drag-and-drop tool for Mac and Windows.

1.  **Download**: Get it from [sideloadly.io](https://sideloadly.io/).
2.  **Connect**: Plug your iPhone into your computer.
3.  **Load IPA**:
    *   Open Sideloadly.
    *   Drag and drop your `App.ipa` onto the IPA box.
4.  **Sign**:
    *   Enter your Apple ID in the "Apple ID" field.
    *   Click **Start**.
5.  **Finish**: Once done, the app will appear on your home screen. Remember to **Trust** the developer in Settings if it doesn't open.
