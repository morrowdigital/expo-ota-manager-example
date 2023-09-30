module.exports = {
  "expo": {
    "name": process.env.EXPO_SLUG,
    "slug": process.env.EXPO_SLUG,
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": process.env.EXPO_BUNDLE_IDENTIFIER
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "package": process.env.EXPO_BUNDLE_IDENTIFIER
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "plugins": [
      [
        "expo-updates",
        {
          "username": process.env.EXPO_USERNAME,
        }
      ]
    ],
    "extra": {
      "eas": {
        "projectId": process.env.EXPO_PROJECT_ID
      }
    },
    "runtimeVersion": {
      "policy": "appVersion"
    },
    "updates": {
      "url": `https://u.expo.dev/${process.env.EXPO_PROJECT_ID}`
    }
  }
};
