import React from 'react'
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native'


import { TOLL_99, TOLL_520 } from '../../redux/constants/toll-vars'

import sign99 from '../../assets/sign99.png'
import sign520 from '../../assets/sign520.png'

export default ({ toggleSwitch, tollName }) => {
  const ToggleButton = ({ src, name }) => {
    const { imageStyle, touchableStyle, selectedStyle } = styles

    // TODO: GET SVG TO WORK
    return (
      <TouchableHighlight 
      onPress={() => toggleSwitch(name)} 
      style={[touchableStyle, name === tollName && selectedStyle]}
      >
        
        <Image source={src} style={imageStyle}/> 

 </TouchableHighlight>
    )
  }
  return (
    <View style={styles.toggleSwitchStyle}>
      <ToggleButton src={sign99} name={TOLL_99}/>
      <ToggleButton src={sign520} name={TOLL_520}/>
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
    backgroundColor: 'black'
  },
  
  touchableStyle: {
    borderRadius: 100,
    backgroundColor: 'gray',
    margin: 20,
  },

  imageStyle: {
    width:40,
    height:40,
    backgroundColor: 'black',
    margin: 10,
  },
})