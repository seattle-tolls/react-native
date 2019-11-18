import React from 'react'
import { StyleSheet, View } from 'react-native'
import CurrTime from './CurrTime'
import TimesView from './TimesView'

import { connect } from 'react-redux'

import { currentTimeInfo, todaySchedule } from '../redux/reducers'

const MainView = ({ todaySchedule, currentTimeInfo }) => {

  return (
  <View style={styles.mainView}>
    {currentTimeInfo && <CurrTime currTime={currentTimeInfo} />}
    {todaySchedule && <TimesView schedule={todaySchedule}/>}
  </View>
)}

const mapStateToProps = (state) => ({
  todaySchedule: todaySchedule(state),
  currentTimeInfo: currentTimeInfo(state),
})

export default connect(mapStateToProps)(MainView)

const styles = StyleSheet.create({
  mainView: {
    flex: 10,
    justifyContent: 'center',
    backgroundColor: '#0f0',
  },
})
