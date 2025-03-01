import { useState } from 'react';
import { StyleSheet, TextInput, ScrollView } from 'react-native';
import * as Speech from 'expo-speech';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import Slider from '@react-native-community/slider';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

export default function TTSScreen() {
  const [text, setText] = useState('');
  const [rate, setRate] = useState(1.0);
  const [pitch, setPitch] = useState(1.0);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speak = async () => {
    const options = {
      rate,
      pitch,
      onStart: () => setIsSpeaking(true),
      onDone: () => setIsSpeaking(false),
      onStopped: () => setIsSpeaking(false),
    };

    if (isSpeaking) {
      Speech.stop();
    } else if (text) {
      Speech.speak(text, options);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.content}>
        <ThemedText type="title" style={styles.title}>Text to Speech</ThemedText>
        
        <TextInput
          style={styles.input}
          multiline
          placeholder="Enter text to speak..."
          value={text}
          onChangeText={setText}
          placeholderTextColor="#666"
        />

        <ThemedView style={styles.controls}>
          <ThemedText>Rate: {rate.toFixed(1)}</ThemedText>
          <Slider
            value={rate}
            onValueChange={setRate}
            minimumValue={0.5}
            maximumValue={2}
            step={0.1}
            style={styles.slider}
            minimumTrackTintColor="#007AFF"
            maximumTrackTintColor="#CCCCCC"
          />

          <ThemedText>Pitch: {pitch.toFixed(1)}</ThemedText>
          <Slider
            value={pitch}
            onValueChange={setPitch}
            minimumValue={0.5}
            maximumValue={2}
            step={0.1}
            style={styles.slider}
            minimumTrackTintColor="#007AFF"
            maximumTrackTintColor="#CCCCCC"
          />

          <TouchableOpacity onPress={speak} style={styles.button}>
            <Ionicons 
              name={isSpeaking ? 'stop-circle' : 'play-circle'} 
              size={50} 
              color="#007AFF" 
            />
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  title: {
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 150,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    textAlignVertical: 'top',
  },
  controls: {
    marginTop: 20,
  },
  slider: {
    marginVertical: 10,
  },
  button: {
    alignItems: 'center',
    marginTop: 20,
  },
});