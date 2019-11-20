import React from 'react'
import { StyleSheet, View } from 'react-native'
import CurrTime from './CurrTime'
import GraphView from './GraphView'
import ScheduleView from './ScheduleView'

import { connect } from 'react-redux'

import { currentTimeInfo, todayScheduleAsArray } from '../redux/reducers'

const MainView = ({ currentTimeInfo, todaySchedule }) => {

  return (
    <View style={styles.mainView}>
      {currentTimeInfo && <CurrTime currTime={currentTimeInfo} />}
      {todaySchedule && <ScheduleView currSchedule={todaySchedule} />}
      {todaySchedule && <GraphView currSchedule={todaySchedule} />}
    </View>
  )
}

const mapStateToProps = (state) => ({
  currentTimeInfo: currentTimeInfo(state),
  todaySchedule: todayScheduleAsArray(state),
})

export default connect(mapStateToProps)(MainView)

const styles = StyleSheet.create({
  mainView: {
    flex: 10,
    justifyContent: 'center',
    backgroundColor: '#0f0',
  },
})
