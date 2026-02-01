import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { QrCode, Plus, X, Settings } from 'lucide-react-native';
import { useState } from 'react';

export default function PairingMode() {
  const router = useRouter();
  const [showLanguageSettings, setShowLanguageSettings] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.closeButton}>
          <X size={24} color="#111827" />
        </TouchableOpacity>
        <Text style={styles.title}>Pairing Mode</Text>
        <TouchableOpacity
          onPress={() => setShowLanguageSettings(!showLanguageSettings)}
          style={styles.settingsButton}>
          <Settings size={24} color="#111827" />
        </TouchableOpacity>
      </View>

      {showLanguageSettings && (
        <View style={styles.languagePanel}>
          <TouchableOpacity style={styles.languagePanelItem}>
            <Text style={styles.languagePanelLabel}>Spoken Language:</Text>
            <Text style={styles.languagePanelValue}>English</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.languagePanelItem}>
            <Text style={styles.languagePanelLabel}>Sign Language:</Text>
            <Text style={styles.languagePanelValue}>ASL</Text>
          </TouchableOpacity>
        </View>
      )}

      <ScrollView style={styles.content}>
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Device Setup</Text>
          <View style={styles.roleSection}>
            <Text style={styles.roleTitle}>This Device:</Text>
            <Text style={styles.roleDescription}>Spoken/Written Language Input</Text>
          </View>
          <View style={styles.roleSection}>
            <Text style={styles.roleTitle}>Other Device:</Text>
            <Text style={styles.roleDescription}>Sign Language Display</Text>
          </View>
        </View>

        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionButton}>
            <Plus size={32} color="#fff" />
            <Text style={styles.optionButtonText}>Create Session</Text>
            <Text style={styles.optionButtonSubtext}>Generate pairing code</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButton}>
            <QrCode size={32} color="#fff" />
            <Text style={styles.optionButtonText}>Join Session</Text>
            <Text style={styles.optionButtonSubtext}>Scan code to connect</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
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
    paddingHorizontal: 16,
    paddingVertical: 8,
    paddingTop: 60,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
  },
  closeButton: {
    padding: 4,
  },
  settingsButton: {
    padding: 4,
  },
  languagePanel: {
    backgroundColor: '#f9fafb',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
  },
  languagePanelItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  languagePanelLabel: {
    fontSize: 14,
    color: '#6b7280',
  },
  languagePanelValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
  content: {
    padding: 24,
  },
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 16,
  },
  roleSection: {
    marginBottom: 12,
  },
  roleTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
  },
  roleDescription: {
    fontSize: 15,
    color: '#6b7280',
  },
  optionsContainer: {
    gap: 16,
  },
  optionButton: {
    backgroundColor: '#2563eb',
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#2563eb',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 4,
  },
  optionButtonText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginTop: 12,
  },
  optionButtonSubtext: {
    fontSize: 14,
    color: '#dbeafe',
    marginTop: 4,
  },
});
