import React from 'react'
import { View, StyleSheet, TouchableHighlight } from 'react-native'

import { TOLL_99, TOLL_520 } from '../redux/constants/toll-vars'

import Toll99Svg from '../assets/svg/toll99'
import Toll520Svg from '../assets/svg/toll520'

const ToggleButton = ({
  name, tollName,
  toggleSwitch, children,
}) => {
  const { imageStyle, touchableStyle, selectedStyle } = styles

  return (
    <TouchableHighlight
      onPress={() => toggleSwitch(name)}
      style={[touchableStyle, name === tollName && selectedStyle]}
    >
      <View style={imageStyle}>
        {children}
      </View>
    </TouchableHighlight>
  )
}

export default ({
  toggleSwitch,
  tollName }) => {
  return (
    <View style={styles.toggleSwitchStyle}>
      <ToggleButton
        name={TOLL_99}
        tollName={tollName}
        toggleSwitch={toggleSwitch} >
        <Toll99Svg/>
      </ToggleButton>
      <ToggleButton
        name={TOLL_520}
        tollName={tollName}
        toggleSwitch={toggleSwitch} >
        <Toll520Svg />
      </ToggleButton>
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
    backgroundColor: 'black',
  },

  touchableStyle: {
    borderRadius: 100,
    backgroundColor: '#888',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    margin: 20,
  },

  imageStyle: {
    width:50,
    height:50,
    margin: 10,
  },
})