import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerStyle: { backgroundColor: "#0a0a14" },
      headerTintColor: "#8b5cf6",
      headerTitleStyle: { fontWeight: "bold" },
    }}>
      <Stack.Screen name="index" options={{ title: "Whitefoxes AI" }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}