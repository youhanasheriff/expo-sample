import { useEffect } from 'react';
import { Image, StyleSheet, Text, View, Animated, Easing } from 'react-native';

export default function HomeScreen() {
  const progress = new Animated.Value(0);

  useEffect(() => {
    
    Animated.loop(
      Animated.timing(progress, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
        easing: Easing.linear,
      })
    ).start();

    return () => {
      progress.stopAnimation();
    }
  }, [])

  const rotate = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  
  return (
    <View style={styles.stepContainer}>
      <Animated.View style={[styles.titleContainer, { transform: [{ rotate: rotate }]}]}>
        <Image
          source={require('@/assets/images/react-logo.png')}
          style={styles.reactLogo}
          resizeMode='contain'
          />
      </Animated.View>
      <Text>Open up the code for this screen:</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '20%',
  },
  stepContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reactLogo: {
    height: 178,
    width: 290,
  },
});
