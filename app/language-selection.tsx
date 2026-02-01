import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { ChevronRight, Check, X } from 'lucide-react-native';

const spokenLanguages = [
  'English',
  'Spanish',
  'French',
  'German',
  'Chinese',
  'Japanese',
  'Korean',
  'Arabic',
];

const signLanguages = [
  { code: 'ASL', name: 'American Sign Language' },
  { code: 'BSL', name: 'British Sign Language' },
  { code: 'LSF', name: 'French Sign Language' },
  { code: 'DGS', name: 'German Sign Language' },
  { code: 'JSL', name: 'Japanese Sign Language' },
  { code: 'KSL', name: 'Korean Sign Language' },
  { code: 'Auslan', name: 'Australian Sign Language' },
  { code: 'NZSL', name: 'New Zealand Sign Language' },
];

export default function LanguageSelection() {
  const router = useRouter();
  const [selectedSpoken, setSelectedSpoken] = useState('English');
  const [selectedSign, setSelectedSign] = useState('ASL');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Language Selection</Text>
        <TouchableOpacity onPress={() => router.back()} style={styles.closeButton}>
          <X size={24} color="#111827" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Spoken/Written Language</Text>
          <Text style={styles.sectionDescription}>
            Choose the language for text and speech input
          </Text>

          <View style={styles.optionsList}>
            {spokenLanguages.map((language) => (
              <TouchableOpacity
                key={language}
                style={[
                  styles.optionItem,
                  selectedSpoken === language && styles.optionItemSelected,
                ]}
                onPress={() => setSelectedSpoken(language)}>
                <Text
                  style={[
                    styles.optionText,
                    selectedSpoken === language && styles.optionTextSelected,
                  ]}>
                  {language}
                </Text>
                {selectedSpoken === language && (
                  <Check size={20} color="#2563eb" strokeWidth={3} />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sign Language</Text>
          <Text style={styles.sectionDescription}>
            Choose the sign language for output
          </Text>

          <View style={styles.optionsList}>
            {signLanguages.map((language) => (
              <TouchableOpacity
                key={language.code}
                style={[
                  styles.optionItem,
                  selectedSign === language.code && styles.optionItemSelected,
                ]}
                onPress={() => setSelectedSign(language.code)}>
                <View style={styles.optionContent}>
                  <Text
                    style={[
                      styles.optionText,
                      selectedSign === language.code && styles.optionTextSelected,
                    ]}>
                    {language.code}
                  </Text>
                  <Text style={styles.optionSubtext}>{language.name}</Text>
                </View>
                {selectedSign === language.code && (
                  <Check size={20} color="#2563eb" strokeWidth={3} />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={() => router.back()}>
          <Text style={styles.saveButtonText}>Save Settings</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
    paddingTop: 60,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
  },
  closeButton: {
    padding: 4,
  },
  content: {
    padding: 24,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 16,
    lineHeight: 20,
  },
  optionsList: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  optionItemSelected: {
    backgroundColor: '#eff6ff',
  },
  optionContent: {
    flex: 1,
  },
  optionText: {
    fontSize: 16,
    color: '#111827',
    fontWeight: '500',
  },
  optionTextSelected: {
    color: '#2563eb',
    fontWeight: '700',
  },
  optionSubtext: {
    fontSize: 13,
    color: '#6b7280',
    marginTop: 2,
  },
  saveButton: {
    backgroundColor: '#2563eb',
    borderRadius: 12,
    padding: 18,
    alignItems: 'center',
    marginTop: 8,
    shadowColor: '#2563eb',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 4,
  },
  saveButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
});
