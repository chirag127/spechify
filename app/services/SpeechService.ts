import * as Speech from 'expo-speech';
import {
  addSpeechRecognitionListener,
  isRecognitionAvailable,
  getSupportedLocales,
  ExpoSpeechRecognitionModule,
  ExpoSpeechRecognitionNativeEventMap,
  ExpoSpeechRecognitionResultEvent,
  ExpoSpeechRecognitionErrorEvent
} from 'expo-speech-recognition';
import * as Localization from 'expo-localization';
import { EventSubscription } from 'expo-modules-core';

export interface SpeechOptions {
  language?: string;
  onResult?: (text: string) => void;
  onError?: (error: string) => void;
}

class SpeechService {
  private isListening: boolean = false;
  private currentLanguage: string;
  private resultListener?: EventSubscription;
  private errorListener?: EventSubscription;

  constructor() {
    this.currentLanguage = Localization.locale.split('-')[0];
    this.checkAvailability();
  }

  private async checkAvailability() {
    try {
      const available = await isRecognitionAvailable();
      if (!available) {
        console.warn('Speech recognition is not available on this device');
      }
    } catch (error) {
      console.error('Error checking speech recognition availability:', error);
    }
  }

  async start(options: SpeechOptions = {}) {
    if (this.isListening) {
      return;
    }

    try {
      this.isListening = true;

      // Set up result listener before starting recognition
      this.resultListener = addSpeechRecognitionListener(
        'result',
        (event: ExpoSpeechRecognitionNativeEventMap['result']) => {
          if (event?.results && event.results.length > 0) {
            const text = event.results[0].transcript || '';
            options.onResult?.(text);
          }
        }
      );

      // Set up error listener
      this.errorListener = addSpeechRecognitionListener(
        'error',
        (event: ExpoSpeechRecognitionNativeEventMap['error']) => {
          if (event) {
            options.onError?.(event.error || 'Unknown error occurred');
          }
        }
      );

      // Start recognition using the module
      await ExpoSpeechRecognitionModule.start({
        lang: options.language || this.currentLanguage,
        interimResults: true,
      });

    } catch (error: unknown) {
      this.isListening = false;
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      options.onError?.('Failed to start speech recognition: ' + errorMessage);
    }
  }

  async stop() {
    if (!this.isListening) {
      return;
    }

    try {
      await ExpoSpeechRecognitionModule.stop();
      // Clean up listeners
      this.resultListener?.remove();
      this.errorListener?.remove();
    } finally {
      this.isListening = false;
    }
  }

  async getSupportedLanguages(): Promise<string[]> {
    try {
      const { locales } = await getSupportedLocales();
      return locales || [];
    } catch (error) {
      console.error('Error getting supported languages:', error);
      return [];
    }
  }

  setLanguage(language: string) {
    this.currentLanguage = language;
  }

  getCurrentLanguage(): string {
    return this.currentLanguage;
  }
}

export const speechService = new SpeechService();