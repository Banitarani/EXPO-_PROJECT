import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const RootLayout = () => {
  return (
    <GestureHandlerRootView>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="welcome" />
        <Stack.Screen name="index" />
        <Stack.Screen name="signup" />
        <Stack.Screen name="home" />
      </Stack>
      <StatusBar backgroundColor="white" style="dark" />
    </GestureHandlerRootView>
  );
};

export default RootLayout;
