# Build the Android APK using only your tablet

You do not need a PC for this method. GitHub Actions builds the APK in the cloud.

1. Create a free GitHub account if you do not already have one.
2. Create a new repository. You can call it `daily-study-aid`.
3. On the repository page, use **Add file → Upload files**.
4. Upload the **contents of this `app` folder**, not the ZIP file itself.
5. Commit the files.
6. Open the repository's **Actions** tab.
7. Select **Build Android APK**.
8. Tap **Run workflow** → **Run workflow**.
9. Wait for the workflow to finish (usually several minutes).
10. Open the completed workflow run and find **Artifacts**.
11. Download `Daily-Study-Aid-debug-apk` on your tablet.
12. Extract the downloaded artifact if necessary and tap `app-debug.apk` to install it.

Android may ask you to allow installation from your browser/file manager. Allow it only for the app you are using to install this APK, then install the APK.

The workflow creates a debug APK; it is suitable for installing on your own tablet/phone. It is not a Play Store release build.
