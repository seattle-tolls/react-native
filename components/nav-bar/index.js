import React from 'react'
import {View, Text, StyleSheet } from 'react-native'

export default ({ str }) =>
  <View style={styles.navBar}>
    <Text style={styles.textStyle}>{str}</Text>
  </View>

const styles = StyleSheet.create({
  navBar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    width: '95%',
  },
  
  textStyle: {
    color: 'white',
  }
})