import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.dailystudyaid.app',
  appName: 'Daily Study Aid',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
