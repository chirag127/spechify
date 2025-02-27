import * as Speech from 'expo-speech';
import {
  addSpeechRecognitionListener,
  isRecognitionAvailable,
  getSupportedLocales,
  ExpoSpeechRecognitionModule,
  ExpoSpeechRecognitionNativeEventMap,
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
      // Clean up any existing listeners first
      this.cleanup();

      // Start recognition before setting up listeners
      await ExpoSpeechRecognitionModule.start({
        lang: options.language || this.currentLanguage,
        interimResults: true,
      });

      this.isListening = true;

      // Set up result listener after starting recognition
      this.resultListener = addSpeechRecognitionListener('result', (event) => {
        if (event?.results && event.results.length > 0) {
          const text = event.results[0].transcript || '';
          options.onResult?.(text);
        }
      });

      // Set up error listener
      this.errorListener = addSpeechRecognitionListener('error', (event) => {
        const errorMessage = event?.error || 'Unknown error occurred';
        options.onError?.(errorMessage);
        this.cleanup();
      });

    } catch (error: unknown) {
      this.cleanup();
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      options.onError?.('Failed to start speech recognition: ' + errorMessage);
    }
  }

  private cleanup() {
    if (this.resultListener) {
      this.resultListener.remove();
      this.resultListener = undefined;
    }
    if (this.errorListener) {
      this.errorListener.remove();
      this.errorListener = undefined;
    }
    this.isListening = false;
  }

  async stop() {
    if (!this.isListening) {
      return;
    }

    try {
      await ExpoSpeechRecognitionModule.stop();
    } finally {
      this.cleanup();
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