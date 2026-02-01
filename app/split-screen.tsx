import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Mic, Plus, Minus, Volume2, Sun, X } from 'lucide-react-native';
import { Video, ResizeMode } from 'expo-av';

export default function SplitScreenMode() {
  const router = useRouter();
  const [textInput, setTextInput] = useState('');
  const [fontSize, setFontSize] = useState(16);

  const increaseFontSize = () => {
    if (fontSize < 28) setFontSize(fontSize + 2);
  };

  const decreaseFontSize = () => {
    if (fontSize > 12) setFontSize(fontSize - 2);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Sign Language Output</Text>
          <TouchableOpacity onPress={() => router.back()} style={styles.closeButton}>
            <X size={24} color="#111827" />
          </TouchableOpacity>
        </View>

        <View style={styles.videoFrame}>
          <Video
            source={require('../assets/images/ASL.mp4')}
            style={StyleSheet.absoluteFillObject}
            resizeMode={ResizeMode.CONTAIN}
            shouldPlay
            isLooping
            useNativeControls={false}
          />
        </View>

        <View style={styles.controlRow}>
          <View style={styles.sliderControl}>
            <Volume2 size={20} color="#6b7280" />
            <View style={styles.sliderTrack}>
              <View style={[styles.sliderFill, { width: '70%' }]} />
            </View>
          </View>
          <View style={styles.sliderControl}>
            <Sun size={20} color="#6b7280" />
            <View style={styles.sliderTrack}>
              <View style={[styles.sliderFill, { width: '50%' }]} />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.bottomSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Text Output</Text>
          <View style={styles.fontControls}>
            <TouchableOpacity onPress={decreaseFontSize} style={styles.fontButton}>
              <Minus size={20} color="#111827" />
            </TouchableOpacity>
            <TouchableOpacity onPress={increaseFontSize} style={styles.fontButton}>
              <Plus size={20} color="#111827" />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={styles.textInputContainer}>
          <Text
            style={[styles.textInput, { fontSize }]}
          />
        </ScrollView>

        <View style={styles.inputControls}>
          <TouchableOpacity style={styles.micButton}>
            <Mic size={28} color="#fff" />
            <Text style={styles.micButtonText}>Tap to Speak</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topSection: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    transform: [{ rotate: '180deg' }],
    paddingBottom: 40,

  },
  bottomSection: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 40,

  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 40,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  closeButton: {
    padding: 4,
  },
  videoFrame: {
    flex: 1,
    margin: 16,
    backgroundColor: '#1f2937',
    borderRadius: 12,
    overflow: 'hidden',
  },
  controlRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 16,
    backgroundColor: '#fff',
  },
  sliderControl: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  sliderTrack: {
    flex: 1,
    height: 6,
    backgroundColor: '#e5e7eb',
    borderRadius: 3,
    overflow: 'hidden',
  },
  sliderFill: {
    height: '100%',
    backgroundColor: '#2563eb',
    borderRadius: 3,
  },
  divider: {
    height: 2,
    backgroundColor: '#1f2937',
  },
  fontControls: {
    flexDirection: 'row',
    gap: 8,
  },
  fontButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#f3f4f6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputContainer: {
    flex: 1,
    padding: 16,
  },
  textInput: {
    minHeight: 150,
    color: '#111827',
    textAlignVertical: 'top',
  },
  inputControls: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  micButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dc2626',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    gap: 12,
  },
  micButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
});