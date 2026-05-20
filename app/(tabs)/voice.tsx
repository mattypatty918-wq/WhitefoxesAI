import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function VoiceScreen() {
  const [text, setText] = useState("");
  const [selectedVoice, setSelectedVoice] = useState("alloy");

  const voices = [
    { id: "alloy", name: "Alloy", emoji: "🔧" },
    { id: "echo", name: "Echo", emoji: "🔊" },
    { id: "fable", name: "Fable", emoji: "📖" },
    { id: "onyx", name: "Onyx", emoji: "🖤" },
    { id: "nova", name: "Nova", emoji: "⭐" },
    { id: "shimmer", name: "Shimmer", emoji: "✨" },
  ];

  const synthesize = () => {
    if (!text.trim()) return;
    // Connect to OpenAI TTS API for real text-to-speech
    alert(`Voice synthesis demo: "${text}" using ${selectedVoice} voice. Connect OpenAI TTS API to enable.`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>AI Voice Synthesis</Text>
        <Text style={styles.subtitle}>Convert text to natural speech</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter text to synthesize..."
          placeholderTextColor="#666"
          value={text}
          onChangeText={setText}
          multiline
        />
      </View>

      <View style={styles.voiceSelector}>
        <Text style={styles.sectionTitle}>Select Voice</Text>
        <View style={styles.voiceGrid}>
          {voices.map((voice) => (
            <TouchableOpacity
              key={voice.id}
              style={[styles.voiceCard, selectedVoice === voice.id && styles.voiceCardSelected]}
              onPress={() => setSelectedVoice(voice.id)}
            >
              <Text style={styles.voiceEmoji}>{voice.emoji}</Text>
              <Text style={styles.voiceName}>{voice.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.synthesizeButton} onPress={synthesize}>
        <Text style={styles.synthesizeButtonText}>Synthesize</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a14",
    padding: 16,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 14,
    color: "#8b5cf6",
    marginTop: 4,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#1a1a2e",
    borderRadius: 12,
    padding: 16,
    color: "#fff",
    fontSize: 16,
    minHeight: 100,
    textAlignVertical: "top",
  },
  voiceSelector: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 12,
  },
  voiceGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  voiceCard: {
    width: "31%",
    backgroundColor: "#1a1a2e",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    marginBottom: 12,
  },
  voiceCardSelected: {
    borderWidth: 2,
    borderColor: "#8b5cf6",
  },
  voiceEmoji: {
    fontSize: 28,
    marginBottom: 8,
  },
  voiceName: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  synthesizeButton: {
    backgroundColor: "#8b5cf6",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
  },
  synthesizeButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});