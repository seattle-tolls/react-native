import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default ({ str }) =>
  <View style={styles.currPrice}>
    <Text>{str}</Text>
  </View>

const styles = StyleSheet.create({
  currPrice: {
    width: '95%',
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
})