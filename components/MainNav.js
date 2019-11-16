import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

const MainNav = () =>
  <View style={styles.mainNav}>
    <Text>Button 1 | Button 2</Text>
  </View>

export default MainNav

const styles = StyleSheet.create({
  mainNav: {
    backgroundColor: '#99f',
    alignContent: 'flex-end'
  }
})