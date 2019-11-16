import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TimesView = () =>
  <View style={styles.timesView} >
    <Text>Times View</Text>
  </View>

export default TimesView

const styles = StyleSheet.create({
  timesView: {
    flex: 1,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
