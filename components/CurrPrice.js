import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CurrPrice = () =>
  <View style={styles.currPrice}>
    <Text>Current Price</Text>
  </View>

export default CurrPrice

const styles = StyleSheet.create({
  currPrice: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cf0',
  },
})
