import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

export default ({ str }) =>
  <View style={styles.graphView}>
    <Text>{str}</Text>
  </View>

const styles = StyleSheet.create({
  graphView: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'magenta',
    width: '95%',
  },
})