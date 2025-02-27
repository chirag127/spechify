[app]
title = Spechify
package.name = spechify
package.domain = org.spechify
source.dir = .
source.include_exts = py,png,jpg,kv,atlas
version = 0.1
requirements = python3,kivy==2.2.1,kivymd==1.1.1,pyaudio==0.2.13,speechrecognition==3.10.0,android-permissions==1.1.0
orientation = portrait
osx.python_version = 3
osx.kivy_version = 2.2.1
fullscreen = 0
android.permissions = RECORD_AUDIO,SYSTEM_ALERT_WINDOW
android.api = 33
android.minapi = 21
android.sdk = 33
android.ndk = 25b
android.private_storage = True
android.accept_sdk_license = True
android.arch = arm64-v8a

[buildozer]
log_level = 2
warn_on_root = 1
