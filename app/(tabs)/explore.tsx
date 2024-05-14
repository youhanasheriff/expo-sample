import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View } from 'react-native';


export default function TabTwoScreen() {
  return (
    <View style={styles.titleContainer}>
      <Image
        source={require('@/assets/images/react-logo.png')}
        style={styles.headerImage}
        resizeMode='contain'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    height: 178,
    width: 290,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
});
