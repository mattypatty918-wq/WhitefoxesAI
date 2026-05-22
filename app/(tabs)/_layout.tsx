import { Tabs } from "expo-router";
import { Text } from "react-native";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarStyle: {
        backgroundColor: "#0a0a14",
        borderTopColor: "#1a1a2e",
        borderTopWidth: 1,
      },
      tabBarActiveTintColor: "#8b5cf6",
      tabBarInactiveTintColor: "#666",
      headerStyle: { backgroundColor: "#0a0a14" },
      headerTintColor: "#fff",
    }}>
      <Tabs.Screen
        name="index"
        options={{ title: "Home", tabBarIcon: ({ color }) => <Text style={{ fontSize: 20 }}>🏠</Text> }}
      />
      <Tabs.Screen
        name="chat"
        options={{ title: "Chat", tabBarIcon: ({ color }) => <Text style={{ fontSize: 20 }}>🤖</Text> }}
      />
      <Tabs.Screen
        name="image"
        options={{ title: "Image", tabBarIcon: ({ color }) => <Text style={{ fontSize: 20 }}>🎨</Text> }}
      />
      <Tabs.Screen
        name="voice"
        options={{ title: "Voice", tabBarIcon: ({ color }) => <Text style={{ fontSize: 20 }}>🎙️</Text> }}
      />
      <Tabs.Screen
        name="settings"
        options={{ title: "Settings", tabBarIcon: ({ color }) => <Text style={{ fontSize: 20 }}>⚙️</Text> }}
      />
    </Tabs>
  );
}