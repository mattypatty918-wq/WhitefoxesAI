import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { useState } from "react";

export default function ImageScreen() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    // Demo: show placeholder. Connect to DALL-E or Stable Diffusion API for real generation
    setTimeout(() => {
      setImageUrl("https://via.placeholder.com/400x400/8b5cf6/ffffff?text=AI+Generated");
      setLoading(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>AI Image Generation</Text>
        <Text style={styles.subtitle}>Create stunning images with AI</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Describe your image..."
          placeholderTextColor="#666"
          value={prompt}
          onChangeText={setPrompt}
          multiline
        />
        <TouchableOpacity style={styles.generateButton} onPress={generateImage} disabled={loading}>
          <Text style={styles.generateButtonText}>{loading ? "Generating..." : "Generate"}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        {imageUrl ? (
          <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="contain" />
        ) : (
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>Your generated image will appear here</Text>
          </View>
        )}
      </View>
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
    minHeight: 80,
    textAlignVertical: "top",
    marginBottom: 12,
  },
  generateButton: {
    backgroundColor: "#8b5cf6",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
  },
  generateButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 12,
  },
  placeholder: {
    width: "100%",
    height: 300,
    backgroundColor: "#1a1a2e",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#8b5cf6",
    borderStyle: "dashed",
  },
  placeholderText: {
    color: "#666",
    fontSize: 14,
  },
});