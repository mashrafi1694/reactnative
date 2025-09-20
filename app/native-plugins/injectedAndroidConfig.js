const { withAppBuildGradle } = require("@expo/config-plugins");

module.exports = function withAndroidStrategiesPlugin(config) {
  return withAppBuildGradle(config, (config) => {
    config.modResults.contents += `
            android {       
                defaultConfig {
                    ndk {
                        abiFilters "armeabi-v7a", "arm64-v8a"
                    }
                }
            }
        `;
    return config;
  });
};
