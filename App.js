import React from 'react'
import { StyleSheet, View, SafeAreaView, Text } from 'react-native'

import {Provider} from 'react-redux'

import store from './redux/store'

import MainNav from './components/MainNav'
import MainView from './components/MainView'
import RoadToggle from './components/RoadToggle'

// TODO: Split my code
// TODO: Work on the style sheet
// TODO: Add d3 for the chart

const MainContainer = (props) =>
  <View style={styles.mainContainer}>
    {props.children}
  </View>

const App = () =>
<Provider store={store}> 
  <SafeAreaView style={styles.safeArea}>
    <MainContainer>
      <RoadToggle />
      <MainView />
      <MainNav />
    </MainContainer>
  </SafeAreaView>
  </Provider>

export default App

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // backgroundColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainContainer: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-between',
    width: '95%',
  },
})
