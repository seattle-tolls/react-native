import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import CurrPrice from './CurrPrice'
import TimesView from './TimesView'

const MainView = () => (
  <View style={styles.mainView}>
    <CurrPrice />
    <TimesView />
  </View>
)

export default MainView

const styles = StyleSheet.create({
  mainView: {
    justifyContent: 'center',
    backgroundColor: '#0f0'
  },
})
