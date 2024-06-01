export default {
  expo: {
    plugins: [
      'expo-font',
      '@react-native-firebase/app',
      '@react-native-firebase/auth',
      '@react-native-firebase/crashlytics',
      [
        'expo-build-properties',
        {
          ios: {
            useFrameworks: 'static',
          },
        },
      ],
      [
        'expo-camera',
        {
          cameraPermission: 'Allow $(PRODUCT_NAME) to access your camera',
        },
      ],
    ],
    name: 'My Tummy Hurts',
    slug: 'my-tummy-hurts',
    version: '0.0.37',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#9370db',
    },
    updates: {
      fallbackToCacheTimeout: 0,
      url: 'https://u.expo.dev/dee3d270-8fc3-4ae5-9592-e99abb7edca2',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: false,
      bundleIdentifier: 'com.tgransdenapps.mytummyhurts',
      googleServicesFile: process.env.IOS_GOOGLE_SERVICES_PLIST ?? './GoogleService-Info.plist',
      buildNumber: '37',
      icon: './assets/ios-icon.png',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/ic_launcher_foreground.png',
        backgroundImage: './assets/ic_launcher_background.png',
        monochromeImage: './assets/ic_launcher_monochrome.png',
      },
      package: 'com.tgransdenapps.mytummyhurts',
      versionCode: 37,
      googleServicesFile: process.env.ANDROID_GOOGLE_SERVICES_JSON,
    },
    web: {
      favicon: './assets/favicon.png',
    },
    extra: {
      eas: {
        projectId: 'dee3d270-8fc3-4ae5-9592-e99abb7edca2',
      },
    },
    owner: 'tgransden',
    runtimeVersion: {
      policy: 'sdkVersion',
    },
  },
};
