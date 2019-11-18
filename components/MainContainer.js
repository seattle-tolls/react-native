import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'

import MainNav from './MainNav'
import MainView from './MainView'
import RoadToggle from './RoadToggle'

const Container = (props) =>
  <View style={styles.mainContainer}>
    {props.children}
  </View>

const MainContainer = () =>
  <SafeAreaView style={styles.safeArea}>
    <Container>
      <RoadToggle />
      <MainView />
      <MainNav />
    </Container>
  </SafeAreaView>

const mapStateToProps = (state) => {
  const { todayInfo } = state.toll
  console.log('INFO-->', todayInfo)
  return { todayInfo }
}

export default connect(mapStateToProps)(MainContainer)

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
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

