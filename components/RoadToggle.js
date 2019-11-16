import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const RoadToggle = () =>
  <View style={styles.roadToggle}>
    <Text>99 | 520</Text>
  </View>

export default RoadToggle

const styles = StyleSheet.create({
  roadToggle: {
    flex: 1,
    backgroundColor: '#f0f',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
