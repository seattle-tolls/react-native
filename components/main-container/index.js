import React, { useState, useEffect, Fragment } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { TOLL_99 } from '../../redux/constants/toll-vars'

import NavBar from '../nav-bar'
import GraphView from '../graph-view'
import ToggleSwitch from '../toggle-switch'
import CurrentPrice from '../current-price'

import { fetchTollInfo } from '../../redux/actions/toll'

const MainContainer = ({ fetchTollInfo }) => {

  const [tollName, setTollName] = useState(TOLL_99)
  const toggleSwitch = (name) => {
    setTollName(name)
  }

  useEffect(() => {
    console.log(tollName)
  }, [tollName])

  return (
    <SafeAreaView style={styles.safeArea}>
      <Fragment>
        <ToggleSwitch str={'Toggle Switch'} toggleSwitch={toggleSwitch} />
        <CurrentPrice str={tollName} />
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
