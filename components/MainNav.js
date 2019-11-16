import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'

const Btn = (props) => {
  const handleClick = () => {
    console.log(props.name)
  }

  return (
    <TouchableHighlight style={styles.btn} onPress={handleClick}>
      <Text style={styles.btnText}>{props.name}</Text>
    </TouchableHighlight>
  )
}

const MainNav = () =>
  <View style={styles.mainNav}>
    <Btn name="Button 1" />
    <Btn name="Button 2" />
  </View>

export default MainNav

const styles = StyleSheet.create({
  mainNav: {
    flex: 1,
    backgroundColor: '#99f',
    justifyContent: 'space-around',
    alignContent: 'stretch',
    flexDirection: 'row',
    height: '10%',

  },
  btn: {
    // flex: 1,
    backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    // alignContent: 'center',
    // justifyContent: 'center',
    // height: '10%'
  },
})