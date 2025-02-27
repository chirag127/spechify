import { useEffect, useState, useCallback, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated, PanResponder, Share, Clipboard, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as SystemUI from 'expo-system-ui';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import * as Localization from 'expo-localization';
import { speechService } from './services/SpeechService';

interface TranscriptionState {
  isListening: boolean;
  text: string;
  error: string | null;
}

export default function App() {
  const [transcription, setTranscription] = useState<TranscriptionState>({
    isListening: false,
    text: '',
    error: null
  });
  const [isDarkMode, setIsDarkMode] = useState(false);
  const overlayPosition = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        overlayPosition.setValue({
          x: gestureState.dx,
          y: gestureState.dy
        });
      },
      onPanResponderRelease: () => {
        overlayPosition.flattenOffset();
      }
    })
  ).current;

  useEffect(() => {
    setupPermissions();
    setupSystemUI();
  }, []);

  const setupPermissions = async () => {
    try {
      await SystemNavigationBar.setNavigationColor('transparent', 'dark');
    } catch (error) {
      setTranscription(prev => ({ ...prev, error: 'Permission denied' }));
    }
  };

  const setupSystemUI = async () => {
    await SystemUI.setBackgroundColorAsync('transparent');
  };

  const toggleListening = useCallback(async () => {
    if (transcription.isListening) {
      await speechService.stop();
      setTranscription(prev => ({ ...prev, isListening: false }));
    } else {
      setTranscription(prev => ({ ...prev, isListening: true, error: null }));
      await speechService.start({
        language: Localization.locale,
        onResult: (text) => {
          setTranscription(prev => ({
            ...prev,
            text: prev.text ? `${prev.text}\n${text}` : text
          }));
        },
        onError: (error) => {
          setTranscription(prev => ({
            ...prev,
            isListening: false,
            error
          }));
        }
      });
    }
  }, [transcription.isListening]);

  const copyToClipboard = useCallback(async () => {
    if (transcription.text) {
      await Clipboard.setString(transcription.text);
    }
  }, [transcription.text]);

  const shareText = useCallback(async () => {
    if (transcription.text) {
      try {
        await Share.share({
          message: transcription.text,
          title: 'Speech Transcription'
        });
      } catch (error) {
        setTranscription(prev => ({
          ...prev,
          error: 'Failed to share text'
        }));
      }
    }
  }, [transcription.text]);

  const toggleTheme = useCallback(() => {
    setIsDarkMode(prev => !prev);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.overlay,
          {
            transform: overlayPosition.getTranslateTransform(),
            backgroundColor: isDarkMode ? '#333333' : '#ffffff'
          }
        ]}
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: transcription.isListening ? '#ff4444' : '#4CAF50' }
            ]}
            onPress={toggleListening}
          >
            <Text style={styles.buttonText}>
              {transcription.isListening ? 'Stop' : 'Start'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={toggleTheme}>
            <Text>{isDarkMode ? '🌞' : '🌙'}</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.transcriptionContainer}>
          <Text
            style={[
              styles.transcriptionText,
              { color: isDarkMode ? '#ffffff' : '#000000' }
            ]}
          >
            {transcription.text || 'Tap Start to begin transcription...'}
          </Text>
          {transcription.error && (
            <Text style={styles.errorText}>{transcription.error}</Text>
          )}
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            style={[styles.iconButton, !transcription.text && styles.disabled]}
            onPress={copyToClipboard}
            disabled={!transcription.text}
          >
            <Text>📋</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.iconButton, !transcription.text && styles.disabled]}
            onPress={shareText}
            disabled={!transcription.text}
          >
            <Text>📤</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  overlay: {
    position: 'absolute',
    minWidth: 200,
    maxWidth: '80%',
    padding: 16,
    borderRadius: 12,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  button: {
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginRight: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  iconButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  transcriptionContainer: {
    marginVertical: 8,
    maxHeight: 200,
  },
  transcriptionText: {
    fontSize: 16,
    lineHeight: 24,
  },
  errorText: {
    color: '#ff4444',
    marginTop: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  disabled: {
    opacity: 0.5,
  },
});
