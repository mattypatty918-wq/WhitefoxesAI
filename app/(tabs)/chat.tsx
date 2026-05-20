import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { useState } from "react";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

export default function ChatScreen() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! I'm Whitefoxes AI. How can I help you today?", isUser: false },
  ]);
  const [inputText, setInputText] = useState("");

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isUser: true,
    };

    setMessages([...messages, userMessage]);
    setInputText("");

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: messages.length + 2,
        text: `This is a demo response to: "${inputText}". Connect to OpenAI or Anthropic API to enable real AI chat.`,
        isUser: false,
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ScrollView style={styles.messagesContainer} contentContainerStyle={styles.messagesContent}>
        {messages.map((message) => (
          <View key={message.id} style={[styles.message, message.isUser ? styles.userMessage : styles.aiMessage]}>
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          placeholderTextColor="#666"
          value={inputText}
          onChangeText={setInputText}
          multiline
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a14",
  },
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
    padding: 16,
  },
  message: {
    maxWidth: "80%",
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#8b5cf6",
  },
  aiMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#1a1a2e",
  },
  messageText: {
    color: "#fff",
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: "#1a1a2e",
    backgroundColor: "#0a0a14",
  },
  input: {
    flex: 1,
    backgroundColor: "#1a1a2e",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    color: "#fff",
    fontSize: 16,
    maxHeight: 100,
  },
  sendButton: {
    marginLeft: 12,
    backgroundColor: "#8b5cf6",
    borderRadius: 20,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  sendButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});