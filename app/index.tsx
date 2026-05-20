import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>Whitefoxes AI</Text>
        <Text style={styles.subtitle}>Your intelligent companion</Text>
      </View>

      <View style={styles.hero}>
        <Text style={styles.heroText}>
          Welcome to the future of personal AI assistance
        </Text>
      </View>

      <View style={styles.features}>
        <Link href="/(tabs)/chat" asChild>
          <TouchableOpacity style={styles.featureCard}>
            <Text style={styles.featureIcon}>🤖</Text>
            <Text style={styles.featureTitle}>AI Chat</Text>
            <Text style={styles.featureDesc}>Intelligent conversations</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/(tabs)/image" asChild>
          <TouchableOpacity style={styles.featureCard}>
            <Text style={styles.featureIcon}>🎨</Text>
            <Text style={styles.featureTitle}>Image Gen</Text>
            <Text style={styles.featureDesc}>Create AI art</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/(tabs)/voice" asChild>
          <TouchableOpacity style={styles.featureCard}>
            <Text style={styles.featureIcon}>🎙️</Text>
            <Text style={styles.featureTitle}>AI Voice</Text>
            <Text style={styles.featureDesc}>Text to speech</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/(tabs)/settings" asChild>
          <TouchableOpacity style={styles.featureCard}>
            <Text style={styles.featureIcon}>⚙️</Text>
            <Text style={styles.featureTitle}>Settings</Text>
            <Text style={styles.featureDesc}>Customize app</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a14",
  },
  content: {
    padding: 20,
    paddingTop: 60,
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: "#8b5cf6",
  },
  hero: {
    backgroundColor: "#1a1a2e",
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#8b5cf6",
  },
  heroText: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    lineHeight: 28,
  },
  features: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  featureCard: {
    width: "48%",
    backgroundColor: "#1a1a2e",
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    alignItems: "center",
  },
  featureIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  featureDesc: {
    fontSize: 12,
    color: "#8b5cf6",
  },
});