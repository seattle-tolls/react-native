import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

const CurrPrice = () =>
  <View style={styles.currPrice}>
    <Text>Current Price</Text>
  </View>

export default CurrPrice

const styles = StyleSheet.create({
  currPrice: {
    justifyContent: 'center',
    backgroundColor: '#0f0'
  }
})
