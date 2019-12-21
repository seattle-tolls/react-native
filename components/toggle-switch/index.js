import React from 'react'
import {View, Text, StyleSheet } from 'react-native'

export default ({ str }) =>
  <View style={styles.toggleSwitch}>
    <Text>{str}</Text>
  </View>

const styles = StyleSheet.create({
  toggleSwitch: {
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '95%'
  }
})