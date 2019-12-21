import React from 'react'
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native'

import { TOLL_99, TOLL_520 } from '../../redux/constants/toll-vars'

import sign99 from '../../assets/sign99.png'
import sign520 from '../../assets/sign520.png'

export default ({ toggleSwitch }) => {

  const ToggleButton = ({ src, style, name }) => {
    return (
      <TouchableHighlight onPress={() => toggleSwitch(name)} >
        <Image source={src} style={style}/>
      </TouchableHighlight>
    )
  }

  const { toggleSwitchStyle, imageStyle } = styles
  return (
    <View style={toggleSwitchStyle}>
      <ToggleButton src={sign99} style={imageStyle} name={TOLL_99}/>
      <ToggleButton src={sign520} style={imageStyle} name={TOLL_520}/>
    </View>
  )
}
const styles = StyleSheet.create({
  toggleSwitchStyle: {
    flex: 1,
    backgroundColor: 'cyan',
    alignItems: 'center',
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'center',
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