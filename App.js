import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Switch, SafeAreaView } from 'react-native';
import * as Speech from 'expo-speech';
import { Picker } from '@react-native-picker/picker';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { Provider as PaperProvider, DefaultTheme, DarkTheme } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Slider from '@react-native-community/slider';

export default function App() {
  const [text, setText] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState('');
  const [rate, setRate] = useState(1.0);
  const [pitch, setPitch] = useState(1.0);
  const [darkTheme, setDarkTheme] = useState(false);

  // Get available voices on component mount
  useEffect(() => {
    const getAvailableVoices = async () => {
      const availableVoices = await Speech.getAvailableVoicesAsync();
      setVoices(availableVoices);
      if (availableVoices.length > 0) {
        setSelectedVoice(availableVoices[0].identifier);
      }
    };

    getAvailableVoices();

    // Add listener for speech end
    Speech.addListener('didFinish', () => setIsSpeaking(false));

    return () => {
      Speech.removeAllListeners();
    };
  }, []);

  const speak = () => {
    if (text.trim() === '') return;

    const options = {
      voice: selectedVoice,
      rate: parseFloat(rate),
      pitch: parseFloat(pitch),
    };

    if (isSpeaking) {
      Speech.stop();
      setIsSpeaking(false);
    } else {
      setIsSpeaking(true);
      Speech.speak(text, options);
    }
  };

  const clearText = () => {
    setText('');
    if (isSpeaking) {
      Speech.stop();
      setIsSpeaking(false);
    }
  };

  const theme = darkTheme ? DarkTheme : {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#6200ee',
      background: '#f5f5f5',
      surface: '#ffffff',
      text: '#000000',
    },
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      padding: 20,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.colors.primary,
    },
    inputContainer: {
      backgroundColor: theme.colors.surface,
      borderRadius: 10,
      padding: 15,
      marginBottom: 20,
      elevation: 2,
    },
    input: {
      height: 150,
      textAlignVertical: 'top',
      color: theme.colors.text,
    },
    controlsContainer: {
      backgroundColor: theme.colors.surface,
      borderRadius: 10,
      padding: 15,
      marginBottom: 20,
      elevation: 2,
    },
    controlRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 15,
    },
    controlLabel: {
      fontSize: 16,
      color: theme.colors.text,
    },
    pickerContainer: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      marginBottom: 15,
    },
    picker: {
      height: 50,
      width: '100%',
      color: theme.colors.text,
    },
    sliderContainer: {
      flex: 1,
      marginLeft: 10,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
    },
    button: {
      backgroundColor: theme.colors.primary,
      paddingVertical: 12,
      paddingHorizontal: 30,
      borderRadius: 25,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft: 8,
    },
    themeSwitch: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    footer: {
      marginTop: 20,
      alignItems: 'center',
    },
    footerText: {
      color: theme.colors.text,
      opacity: 0.7,
    },
    valueText: {
      width: 40,
      textAlign: 'center',
      color: theme.colors.text,
    },
  });

  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <SafeAreaView style={styles.container}>
          <StatusBar style={darkTheme ? 'light' : 'dark'} />

          <View style={styles.header}>
            <Text style={styles.title}>Spechify</Text>
            <View style={styles.themeSwitch}>
              <Ionicons name="sunny" size={24} color={darkTheme ? '#aaa' : '#f1c40f'} />
              <Switch
                value={darkTheme}
                onValueChange={setDarkTheme}
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={darkTheme ? '#f5dd4b' : '#f4f3f4'}
                style={{ marginHorizontal: 8 }}
              />
              <Ionicons name="moon" size={24} color={darkTheme ? '#f1c40f' : '#aaa'} />
            </View>
          </View>

          <ScrollView>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                multiline
                placeholder="Enter text to speak..."
                placeholderTextColor={darkTheme ? '#aaa' : '#999'}
                value={text}
                onChangeText={setText}
              />
            </View>

            <View style={styles.controlsContainer}>
              <Text style={[styles.controlLabel, { marginBottom: 10 }]}>Voice Options:</Text>

              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={selectedVoice}
                  onValueChange={(itemValue) => setSelectedVoice(itemValue)}
                  style={styles.picker}
                  dropdownIconColor={theme.colors.text}
                >
                  {voices.map((voice) => (
                    <Picker.Item
                      key={voice.identifier}
                      label={`${voice.name} (${voice.language})`}
                      value={voice.identifier}
                    />
                  ))}
                </Picker>
              </View>

              <View style={styles.controlRow}>
                <Text style={styles.controlLabel}>Speed:</Text>
                <Text style={styles.valueText}>{rate.toFixed(1)}x</Text>
                <View style={styles.sliderContainer}>
                  <Slider
                    minimumValue={0.1}
                    maximumValue={2.0}
                    step={0.1}
                    value={rate}
                    onValueChange={setRate}
                    minimumTrackTintColor={theme.colors.primary}
                    maximumTrackTintColor="#ddd"
                    thumbTintColor={theme.colors.primary}
                  />
                </View>
              </View>

              <View style={styles.controlRow}>
                <Text style={styles.controlLabel}>Pitch:</Text>
                <Text style={styles.valueText}>{pitch.toFixed(1)}</Text>
                <View style={styles.sliderContainer}>
                  <Slider
                    minimumValue={0.5}
                    maximumValue={2.0}
                    step={0.1}
                    value={pitch}
                    onValueChange={setPitch}
                    minimumTrackTintColor={theme.colors.primary}
                    maximumTrackTintColor="#ddd"
                    thumbTintColor={theme.colors.primary}
                  />
                </View>
              </View>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={speak}>
                <MaterialIcons
                  name={isSpeaking ? "stop" : "play-arrow"}
                  size={24}
                  color="white"
                />
                <Text style={styles.buttonText}>
                  {isSpeaking ? "Stop" : "Speak"}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, { backgroundColor: '#e74c3c' }]}
                onPress={clearText}
              >
                <MaterialIcons name="clear" size={24} color="white" />
                <Text style={styles.buttonText}>Clear</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Spechify - Text to Speech App</Text>
          </View>
        </SafeAreaView>
      </PaperProvider>
    </SafeAreaProvider>
  );
}