import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import 'react-native-reanimated';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
    
    console.log('Checking network connection...');
    const unsubscribe = NetInfo.addEventListener((state) => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
      if (state.isConnected) {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    });

    return () => {
      console.log('Unsubscribing from network connection check...');
      unsubscribe();
    };
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {loading && <SplashScreenCustom />}
      {!loading && (
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      )}
    </ThemeProvider>
  );
}

const SplashScreenCustom = () => {
  return (
    <View style={styles.container}>
      <Text>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
