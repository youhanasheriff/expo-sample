import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View } from 'react-native';


export default function TabTwoScreen() {
  return (
    <View style={styles.titleContainer}>
      <Image
        source={require('@/assets/images/react-logo.png')}
        style={styles.headerImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
