import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

const RoadToggle = () => 
  <View style={styles.roadToggle}>
    <Text>99 | 520</Text>
  </View>

export default RoadToggle

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  mainView: {
    justifyContent: 'center',
    backgroundColor: '#0f0'
  },

  timesView: {
    backgroundColor: '#ff0'
  },

  mainNav: {
    backgroundColor: '#99f',
    alignContent: 'flex-end'
  },

  roadToggle: {
    backgroundColor: '#f0f',
    alignItems: 'center'
  }
})
