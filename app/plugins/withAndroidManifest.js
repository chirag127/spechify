const { withAndroidManifest } = require('@expo/config-plugins');

module.exports = function withCustomAndroidManifest(config) {
  return withAndroidManifest(config, async (config) => {
    const androidManifest = config.modResults;

    // Ensure we have the necessary permissions
    if (!androidManifest.manifest.uses-permission) {
      androidManifest.manifest['uses-permission'] = [];
    }

    const permissions = androidManifest.manifest['uses-permission'];
    const requiredPermissions = [
      'android.permission.FOREGROUND_SERVICE',
      'android.permission.CAPTURE_AUDIO_OUTPUT'
    ];

    requiredPermissions.forEach(permission => {
      if (!permissions.some(p => p.$['android:name'] === permission)) {
        permissions.push({
          $: {
            'android:name': permission
          }
        });
      }
    });

    // Add foreground service declaration
    if (!androidManifest.manifest.application[0]['service']) {
      androidManifest.manifest.application[0]['service'] = [];
    }

    const services = androidManifest.manifest.application[0]['service'];
    const audioService = {
      $: {
        'android:name': '.AudioCaptureService',
        'android:exported': 'false',
        'android:foregroundServiceType': 'mediaProjection'
      }
    };

    if (!services.some(s => s.$['android:name'] === audioService.$['android:name'])) {
      services.push(audioService);
    }

    return config;
  });
};