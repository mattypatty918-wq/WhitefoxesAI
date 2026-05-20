import { View, Text, StyleSheet, TouchableOpacity, Switch, ScrollView } from "react-native";

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <TouchableOpacity style={styles.settingRow}>
          <Text style={styles.settingLabel}>Profile</Text>
          <Text style={styles.settingValue}>→</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingRow}>
          <Text style={styles.settingLabel}>Subscription</Text>
          <Text style={styles.settingValue}>Free →</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Dark Mode</Text>
          <Switch value={darkMode} onValueChange={setDarkMode} trackColor={{ false: "#666", true: "#8b5cf6" }} />
        </View>
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Notifications</Text>
          <Switch value={notifications} onValueChange={setNotifications} trackColor={{ false: "#666", true: "#8b5cf6" }} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>API Configuration</Text>
        <TouchableOpacity style={styles.settingRow}>
          <Text style={styles.settingLabel}>OpenAI API Key</Text>
          <Text style={styles.settingValue}>→</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingRow}>
          <Text style={styles.settingLabel}>Anthropic API Key</Text>
          <Text style={styles.settingValue}>→</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Version</Text>
          <Text style={styles.settingValue}>1.0.0</Text>
        </View>
        <TouchableOpacity style={styles.settingRow}>
          <Text style={styles.settingLabel}>Privacy Policy</Text>
          <Text style={styles.settingValue}>→</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingRow}>
          <Text style={styles.settingLabel}>Terms of Service</Text>
          <Text style={styles.settingValue}>→</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

import { useState } from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a14",
  },
  header: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  section: {
    padding: 16,
    paddingTop: 0,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#8b5cf6",
    marginBottom: 12,
    textTransform: "uppercase",
  },
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1a1a2e",
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
  },
  settingLabel: {
    fontSize: 16,
    color: "#fff",
  },
  settingValue: {
    fontSize: 16,
    color: "#666",
  },
});