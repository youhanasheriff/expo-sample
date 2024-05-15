import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NativeModules } from 'react-native'

const Counter = NativeModules.Counter;

console.log(Counter)

const GetNative = () => {
  return (
    <View style={styles.flex}>
      <Text>GetNative</Text>
    </View>
  )
}

export default GetNative

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})