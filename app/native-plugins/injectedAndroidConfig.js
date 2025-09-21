const { withAppBuildGradle } = require("@expo/config-plugins");

module.exports = function withAndroidStrategiesPlugin(config) {
  return withAppBuildGradle(config, (config) => {
    // اضافه کردن abiFilters به defaultConfig
    config.modResults.contents = config.modResults.contents.replace(
      /defaultConfig\s*{([\s\S]*?)}/,
      (match, p1) => `
        defaultConfig {
            ${p1}
            ndk {
                abiFilters "armeabi-v7a", "arm64-v8a"
            }
        }
      `
    );

    // اضافه کردن packagingOptions برای legacy jni
    if (!config.modResults.contents.includes("useLegacyPackaging true")) {
      config.modResults.contents = config.modResults.contents.replace(
        /android\s*{([\s\S]*?)}/,
        (match, p1) => `
          android {
              ${p1}
              packagingOptions {
                  jniLibs {
                      useLegacyPackaging true
                  }
              }
          }
        `
      );
    }

    // اضافه کردن linker flag برای page size = 64KB
    if (!config.modResults.contents.includes("-Wl,-z,max-page-size=65536")) {
      config.modResults.contents = config.modResults.contents.replace(
        /android\s*{([\s\S]*?)}/,
        (match, p1) => `
          android {
              ${p1}
              defaultConfig {
                  externalNativeBuild {
                      cmake {
                          arguments "-Wl,-z,max-page-size=65536"
                      }
                  }
              }
          }
        `
      );
    }

    return config;
  });
};
