import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CurrTime = () =>
  <View style={styles.currTime}>
    <Text>Current Times</Text>
  </View>

export default CurrTime

const styles = StyleSheet.create({
  currTime: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cf0',
  },
})
