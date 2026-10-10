import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Phase 0 placeholder. The real screens, navigation and design tokens arrive in Phase 1.
export default function App() {
  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style={styles.title}>
        1%
      </Text>
      <Text style={styles.tagline}>One question. Every day.</Text>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#4B1FA8',
    fontSize: 64,
    fontWeight: '700',
  },
  tagline: {
    color: '#1F1F24',
    fontSize: 18,
    marginTop: 8,
  },
});
