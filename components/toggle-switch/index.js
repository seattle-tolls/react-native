import React, { useState, Fragment } from 'react'
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native'

import sign99 from '../../assets/sign99.png'
import sign520 from '../../assets/sign520.png'

export default ({ switchHandler }) => {
  const [tollName, setTollName] = useState('')
  const clickEvent = (event, name) => {
    console.log('NAME:', tollName)
    console.log('TITLE:', name)
    // switchHandler(event.target.name)

  }

  // useEffect () {

  // }

  const ToggleButton = ({ src, style, name }) => {
    setTollName(name)
    return (
      <TouchableHighlight
        onPress={clickEvent}
      >
        <Fragment>
          <Image source={src} style={style}/>
        </Fragment>
      </TouchableHighlight>
    )
  }

  const { toggleSwitch, imageStyle } = styles
  return (
    <View style={toggleSwitch}>
      <ToggleButton src={sign99} style={imageStyle} name='99 toll' />
      <ToggleButton src={sign520} style={imageStyle} name='520 toll' />
      {/* <ToggleButton /> */}
    </View>
  )
}
const styles = StyleSheet.create({
  toggleSwitch: {
    flex: 1,
    backgroundColor: 'cyan',
    alignItems: 'center',
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'center',
  },
  textStyles: {
    // flex: 1,
    // width: '50%',
    // flexGrow: 1,
  },

  selectedStyle: {

  },

  imageStyle: {
    width:40,
    height:40,
    backgroundColor: 'black',
    margin: 20,
  },
})