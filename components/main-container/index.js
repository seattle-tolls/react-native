import React, { useEffect, Fragment } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { TOLL_99 } from '../../redux/constants/toll-vars'

import NavBar from '../nav-bar'
import GraphView from '../graph-view'
import ToggleSwitch from '../toggle-switch'
import CurrentPrice from '../current-price'

import { fetchTollInfo } from '../../redux/actions/toll'
import { setTollName } from '../../redux/actions/toll-name'
import { tollInfo } from '../../redux/reducers'

const MainContainer = ({ fetchTollInfo, setTollName, tollName }) => {

  // TODO: create a clock that keeps track of the time in redux
  const toggleSwitch = (name) => {
    setTollName(name)
  }

  useEffect(() => {
    setTollName(TOLL_99)
    fetchTollInfo()
  }, [])

  return (
    <SafeAreaView style={styles.safeArea}>
      <Fragment>
        <ToggleSwitch
          str={'Toggle Switch'}
          toggleSwitch={toggleSwitch}
          tollName={tollName}
        />
        <CurrentPrice str={tollName} />
        <GraphView str={'Graph View :)'} />
        <NavBar str={'Navigation'} />
      </Fragment>
    </SafeAreaView>
  )
}

const mapStateToProps = (state) => {
  return {
    tollInfo: tollInfo(state),
    tollName: state.tollName,
  }
}

const mapDispatchToProps = {
  fetchTollInfo,
  setTollName,
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ccc',
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
