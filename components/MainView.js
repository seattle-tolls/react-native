import React from 'react'
import { StyleSheet, View } from 'react-native'
import CurrTime from './CurrTime'
import GraphView from './GraphView'
import ScheduleView from './ScheduleView'

import { connect } from 'react-redux'

import { currentTimeInfo, todaySchedule } from '../redux/reducers'

const MainView = ({ todaySchedule, currentTimeInfo }) => {

  // console.table(currentTimeInfo )

  return (
    <View style={styles.mainView}>
      {currentTimeInfo && <CurrTime currTime={currentTimeInfo} />}
      {todaySchedule[0] && <ScheduleView currSchedule={todaySchedule} />}
      {todaySchedule[0] && <GraphView currSchedule={todaySchedule} />}

    </View>
  )
}

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
