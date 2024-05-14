import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Colors';
import { Text, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store, persistor } from '@/state/store';
import { PersistGate } from 'redux-persist/integration/react';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Tabs
            screenOptions={{
              tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
              headerShown: false,
            }}>
            <Tabs.Screen
              name="index"
              options={{
                title: 'Home',
                tabBarIcon: ({ color, focused }) => (
                  <Text style={{ color }}>{focused ? '🏠' : '🏡'}</Text>
                ),
              }}
              />
            <Tabs.Screen
              name="explore"
              options={{
                title: 'Explore',
                tabBarIcon: ({ color, focused }) => (
                  <Text style={{ color }}>{focused ? '🔍' : '🔎'}</Text>
                ),
              }}
              />
          </Tabs>
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
}
