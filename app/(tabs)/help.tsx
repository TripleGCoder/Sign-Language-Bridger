import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Grid2x2, Smartphone, MessageSquare } from 'lucide-react-native';

export default function HelpScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Help & Guide</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.helpSection}>
          <View style={styles.iconContainer}>
            <Grid2x2 size={32} color="#dc2626" />
          </View>
          <Text style={styles.helpTitle}>Split Screen Mode</Text>
          <Text style={styles.helpText}>
            Use a single device for face-to-face communication. One side displays text/speech input,
            while the other shows sign language output (upside down for the person across from you).
          </Text>
        </View>

        <View style={styles.helpSection}>
          <View style={styles.iconContainer}>
            <Smartphone size={32} color="#2563eb" />
          </View>
          <Text style={styles.helpTitle}>Pairing Mode</Text>
          <Text style={styles.helpText}>
            Connect two devices for separate displays. One device handles spoken/written language,
            while the other shows sign language output.
          </Text>
        </View>

        <View style={styles.helpSection}>
          <View style={styles.iconContainer}>
            <MessageSquare size={32} color="#059669" />
          </View>
          <Text style={styles.helpTitle}>How It Works</Text>
          <Text style={styles.helpText}>
            This app bridges communication between sign language users and spoken/written language users.
            Input text or speech, and see the corresponding sign language video. Future versions will
            include 3D animated avatars.
          </Text>
        </View>

        <View style={styles.tipSection}>
          <Text style={styles.tipTitle}>Tips</Text>
          <Text style={styles.tipText}>• Adjust text size using the +/- buttons</Text>
          <Text style={styles.tipText}>• Control volume and brightness with the sliders</Text>
          <Text style={styles.tipText}>• Select your preferred languages in Settings</Text>
        </View>
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
    padding: 24,
    paddingTop: 60,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#111827',
  },
  content: {
    padding: 24,
  },
  helpSection: {
    marginBottom: 32,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    marginBottom: 12,
  },
  helpTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  helpText: {
    fontSize: 15,
    color: '#6b7280',
    lineHeight: 22,
  },
  tipSection: {
    backgroundColor: '#fef3c7',
    borderRadius: 16,
    padding: 20,
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#92400e',
    marginBottom: 12,
  },
  tipText: {
    fontSize: 15,
    color: '#78350f',
    lineHeight: 24,
    marginBottom: 4,
  },
});
