# Daily Study Aid — Android build

This project started as a React/Vite web app. It is now prepared for Android in two ways.

## Option 1 — Install it on Android as a PWA

1. Build the app:
   `npm install`
   `npm run build`
2. Deploy the `dist` folder to any HTTPS host.
3. Open the site in Chrome on Android.
4. Use Chrome's **Add to Home screen / Install app** option.

The app has a manifest, standalone display mode, mobile viewport handling, safe-area support and a service worker for offline app-shell caching.

## Option 2 — Build an APK with Android Studio

Requirements: Node.js, Android Studio, Android SDK, and a JDK supported by the installed Android Gradle Plugin.

From this directory:

```bash
npm install
npm run android:sync
npx cap open android
```

In Android Studio, let Gradle finish syncing, then choose **Build > Build APK(s)**.

For a debug APK from the command line:

```bash
npm run android:apk
```

The debug APK will normally be under:

`android/app/build/outputs/apk/debug/app-debug.apk`

The Android application ID is:

`com.dailystudyaid.app`

The displayed app name is:

`Daily Study Aid`

## Important limitation

The current timer uses the browser/WebView timer and localStorage. It is reliable while the app is active, but Android may suspend WebView JavaScript when the app is backgrounded or the screen is locked. A production version that must continue timing in the background should use native Android foreground/background scheduling and notifications.
