# Spechify

A modern React Native application for capturing system audio on Android devices. Spechify provides a sleek, user-friendly interface for recording audio from other apps and managing the recordings.

## Features

- 📱 System audio capture on Android devices
- 🌓 Dark/Light theme toggle
- 🔄 Draggable interface for flexible positioning
- 📋 Copy captured audio text to clipboard
- 📤 Share functionality
- 🎨 Modern, minimalist UI design
- 📱 Responsive layout with support for different screen sizes
- 🔋 Background audio capture support

## Requirements

- Node.js 14 or higher
- Expo CLI
- Android device/emulator (Android only - iOS not supported for system audio capture)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/spechify.git
cd spechify/app
```

1. Install dependencies:

```bash
npm install
```

1. Start the development server:

```bash
npm start
```

1. Run on Android:

- Press 'a' in the terminal to run on Android device/emulator
- Or scan the QR code with Expo Go app (Android only)

## Usage

1. Launch the app on your Android device
2. Position the floating interface anywhere on screen by dragging
3. Tap the 'Start' button to begin capturing system audio
4. Use the theme toggle (🌞/🌙) to switch between light and dark modes
5. Copy (📋) or share (📤) the captured audio text
6. Tap 'Stop' to end the capture session

## Technical Details

- Built with React Native and Expo
- Uses expo-av for audio capture
- Implements system-level permissions for Android audio capture
- Features smooth animations and gesture handling
- Supports background operation

## Permissions

The app requires the following Android permissions:

- FOREGROUND_SERVICE: For reliable audio capture
- CAPTURE_AUDIO_OUTPUT: For system audio recording

## License

This project is licensed under the GNU General Public License v2.0 - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Notes

- System audio capture is only supported on Android devices
- iOS support is not available due to platform limitations

