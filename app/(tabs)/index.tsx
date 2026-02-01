import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Grid2x2, Smartphone } from 'lucide-react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Language Bridge</Text>
      <Text style={styles.subtitle}>Choose your communication mode</Text>

      <View style={styles.modesContainer}>
        <TouchableOpacity
          style={[styles.modeButton, styles.splitScreenButton]}
          onPress={() => router.push('/split-screen')}>
          <Grid2x2 size={48} color="#fff" strokeWidth={2} />
          <Text style={styles.modeButtonText}>Split Screen</Text>
          <Text style={styles.modeDescription}>Single device, face-to-face</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.modeButton, styles.pairingButton]}
          onPress={() => router.push('/pairing')}>
          <Smartphone size={48} color="#fff" strokeWidth={2} />
          <Text style={styles.modeButtonText}>Pairing Mode</Text>
          <Text style={styles.modeDescription}>Connect two devices</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.languageButton}
        onPress={() => router.push('/language-selection')}>
        <Text style={styles.languageButtonText}>Language Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 48,
  },
  modesContainer: {
    gap: 20,
  },
  modeButton: {
    borderRadius: 20,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  splitScreenButton: {
    backgroundColor: '#dc2626',
  },
  pairingButton: {
    backgroundColor: '#2563eb',
  },
  modeButtonText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    marginTop: 16,
  },
  modeDescription: {
    fontSize: 14,
    color: '#f3f4f6',
    marginTop: 4,
  },
  languageButton: {
    marginTop: 32,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    alignItems: 'center',
  },
  languageButtonText: {
    fontSize: 16,
    color: '#2563eb',
    fontWeight: '600',
  },
});
