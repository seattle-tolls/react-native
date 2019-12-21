import React, { useEffect, Fragment } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import NavBar from '../nav-bar'
import GraphView from '../graph-view'
import ToggleSwitch from '../toggle-switch'
import CurrentPrice from '../current-price'

import { fetchTollInfo } from '../../redux/actions/toll'

const MainContainer = ({ fetchTollInfo }) => {

  useEffect(() => {
    // fetchTollInfo()
  }, [])

  // TODO: get a few rough components to see how they fit

  return (
    <SafeAreaView style={styles.safeArea}>
      <Fragment>
        <ToggleSwitch str={'Toggle Switch'} />
        <CurrentPrice str={'Current Price'} />
        <GraphView str={'Graph View :)'} />
        <NavBar str={'Navigation'} />
      </Fragment>
    </SafeAreaView>
  )
}

const mapDispatchToProps = {
  fetchTollInfo: fetchTollInfo,
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ccc',
  },
})

export default connect(null, mapDispatchToProps)(MainContainer)
