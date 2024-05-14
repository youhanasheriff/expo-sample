import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, Animated, Easing, FlatList, RefreshControl, TouchableOpacity, Alert } from 'react-native';


function AnimatedImage() {
  const progress = new Animated.Value(0);

  useEffect(() => {
    const anime = Animated.loop(
      Animated.timing(progress, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
        easing: Easing.linear,
      })
    );

    anime.start();

    return () => {
      anime.stop();
    }
  }, [])

  const rotate = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

    return (<Animated.Image source={require('@/assets/images/react-logo.png')} style={[styles.reactLogo, {
  transform: [{
    rotate: rotate
  }]
}]} resizeMode={'contain'} />);
}


export default function HomeScreen() {
  const [data, setData] = useState([1, 2, 3]);
  const [refresh, setRefresh] = useState(false);



  return (
    <View style={styles.stepContainer}>
      <FlatList 
        data={data}
        keyExtractor={item => (item * Math.random() * 1000).toString()}
        renderItem={({item}) => (
          <View style={styles.titleContainer}>
            <AnimatedImage />
            <Text>Step {item}</Text>
            <TouchableOpacity onPress={() => {
              if (data.length === 1) {
                  Alert.alert('Alert!', 'Cannot delete last item', 
                  [{text: 'Cancel', onPress: () => console.log('Cancel Pressed')}],
                );
                return;
              }
              setData((prev) => prev.filter((i) => i !== item));
            }}>
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        refreshControl={<RefreshControl refreshing={refresh} onRefresh={() => {
          setRefresh(true);
          setTimeout(() => {
            setData((prev) => [...prev, prev[prev.length - 1] + 1]);
            setRefresh(false);
          }, 2000);
          console.log('Refresh');
        }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  stepContainer: {
    flex: 1,
  },
  reactLogo: {
    height: 100,
    width: 100,
  },
});
