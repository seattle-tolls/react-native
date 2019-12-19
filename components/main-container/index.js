import React, { useEffect, Fragment } from 'react'
import { SafeAreaView, StyleSheet, Text, View, Dimensions } from 'react-native'
import { connect } from 'react-redux'

import { fetchTollInfo } from '../../redux/actions/toll'

let { width, height } = Dimensions.get('window')
console.log({ width, height })

const Container = (props) =>
  <View style={styles.mainContainer}>
    {props.children}
  </View>

const FakeContainer = ({ str, style }) => 
<View style={style}>
    <Text >{str}</Text>
</View>


const MainContainer = ({ fetchTollInfo }) => {

  useEffect(() => {
    // fetchTollInfo()
  }, [])


  // TODO: get a few rough components to see how they fit

  return (
    <SafeAreaView style={styles.safeArea}>

      <FakeContainer str={'Container 1'} style={styles.style1} />
      <FakeContainer str={'Container 2'} style={styles.style2} />
      <FakeContainer str={'Container 3'} style={styles.style3} />
      <FakeContainer str={'Container 4'} style={styles.style4} />
    </SafeAreaView>
  )
}

const mapDispatchToProps = {
  fetchTollInfo: fetchTollInfo,
}

export default connect(null, mapDispatchToProps)(MainContainer)

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc',
  },

  style1: {
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: 200,
    height: 200
  },

  
  style2: {
    backgroundColor: 'yellow',
  },
  
  style3: {
    // backgroundColor: 'magenta',
  },

  style4: {
    color: '#2196f3',
  },

  // mainContainer: {
  //   flex: 1,
  //   alignItems: 'stretch',
  //   justifyContent: 'space-between',
  //   width: '95%',
  // },
})

