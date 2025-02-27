import { Audio } from 'expo-av';
import { Platform } from 'react-native';

export interface AudioCaptureOptions {
  onData?: (data: string) => void;
  onError?: (error: string) => void;
}

class AudioCaptureService {
  private recording: Audio.Recording | null = null;
  private isRecording: boolean = false;

  async start(options: AudioCaptureOptions = {}) {
    if (this.isRecording) {
      return;
    }

    if (Platform.OS === 'ios') {
      options.onError?.('System audio capture is not supported on iOS');
      return;
    }

    try {
      await Audio.setAudioModeAsync({
        playsInSilentModeIOS: true,
        staysActiveInBackground: true,
      });

      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync({
        android: {
          extension: '.m4a',
          outputFormat: 2, // MPEG_4
          audioEncoder: 3, // AAC
          sampleRate: 44100,
          numberOfChannels: 2,
          bitRate: 128000,
        }
      });

      await recording.startAsync();
      this.recording = recording;
      this.isRecording = true;

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      options.onError?.('Failed to start audio capture: ' + errorMessage);
      this.cleanup();
    }
  }

  private cleanup() {
    this.recording = null;
    this.isRecording = false;
  }

  async stop(): Promise<string | null> {
    if (!this.isRecording || !this.recording) {
      return null;
    }

    try {
      await this.recording.stopAndUnloadAsync();
      const uri = this.recording.getURI();
      this.cleanup();
      return uri;
    } catch (error) {
      console.error('Error stopping recording:', error);
      this.cleanup();
      return null;
    }
  }

  isCapturing(): boolean {
    return this.isRecording;
  }
}

export const audioCaptureService = new AudioCaptureService();