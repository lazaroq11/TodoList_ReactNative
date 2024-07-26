import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs, Stack } from 'expo-router';

export default function TabLayout() {
  return (

    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', headerShown: false } }>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'Histórico',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="book" color={color} />,
        }}
      />
    </Tabs>
  );
}