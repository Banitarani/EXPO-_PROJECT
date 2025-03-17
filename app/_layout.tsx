import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen 
        name="home" 
        options={{ 
          tabBarIcon: () => (
            <Ionicons name="home" color="blue" size={24} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="index" 
        options={{ 
          tabBarIcon: () => (
            <Ionicons name="list" color="blue" size={24} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="login" 
        options={{ 
          tabBarIcon: () => (
            <Ionicons name="log-in" color="blue" size={24} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="signup" 
        options={{ 
          tabBarIcon: () => (
            <Ionicons name="person-add-outline" color="blue" size={24} />
          ),
        }} 
      />
    </Tabs>
  );
}
