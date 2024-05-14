import { Image, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.stepContainer}>
      <View style={styles.titleContainer}>
        <Image
          source={require('@/assets/images/react-logo.png')}
          style={styles.reactLogo}
          resizeMode='contain'
          />
      </View>
      <Text>Open up the code for this screen:</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '20%',
    gap: 8,
  },
  stepContainer: {
    flex: 1,
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
