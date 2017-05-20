cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.ezartech.ezar.flashlight/www/flashlight.js",
        "id": "com.ezartech.ezar.flashlight.flashlight",
        "pluginId": "com.ezartech.ezar.flashlight",
        "merges": [
            "ezar"
        ]
    },
    {
        "file": "plugins/com.ezartech.ezar.snapshot/www/snapshot.js",
        "id": "com.ezartech.ezar.snapshot.snapshot",
        "pluginId": "com.ezartech.ezar.snapshot",
        "merges": [
            "ezar"
        ]
    },
    {
        "file": "plugins/com.ezartech.ezar.videooverlay/www/videoOverlay.js",
        "id": "com.ezartech.ezar.videooverlay.videoOverlay",
        "pluginId": "com.ezartech.ezar.videooverlay",
        "merges": [
            "ezar"
        ]
    },
    {
        "file": "plugins/com.ezartech.ezar.videooverlay/www/camera.js",
        "id": "com.ezartech.ezar.videooverlay.camera",
        "pluginId": "com.ezartech.ezar.videooverlay",
        "clobbers": [
            "camera"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "pluginId": "cordova-plugin-device",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/src/browser/SplashScreenProxy.js",
        "id": "cordova-plugin-splashscreen.SplashScreenProxy",
        "pluginId": "cordova-plugin-splashscreen",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/src/browser/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar.Browser",
        "pluginId": "cordova-plugin-statusbar",
        "merges": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/ionic-plugin-keyboard/www/browser/keyboard.js",
        "id": "ionic-plugin-keyboard.keyboard",
        "pluginId": "ionic-plugin-keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ],
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.ezartech.ezar.flashlight": "0.2.1",
    "com.ezartech.ezar.snapshot": "0.2.3",
    "com.ezartech.ezar.videooverlay": "0.2.4",
    "cordova-plugin-console": "1.0.3",
    "cordova-plugin-device": "1.1.2",
    "cordova-plugin-splashscreen": "3.2.2",
    "cordova-plugin-statusbar": "2.1.3",
    "cordova-plugin-whitelist": "1.2.2",
    "ionic-plugin-keyboard": "2.2.0"
}
// BOTTOM OF METADATA
});