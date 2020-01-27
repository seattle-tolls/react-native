import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

// TODO: add styles
const CurrentPrice = ({
  goodToGo, payByMail, schedule, dayName, holidayName,
}) =>
  <View style={styles.currPrice}>
    { holidayName && <Text>{holidayName}</Text> }
    <Text>{dayName}</Text>
    <View>
      <Text>Good To Go</Text>
      <Text>{goodToGo}</Text>
    </View>
    <View>
      <Text>Pay By Mail</Text>
      <Text>{payByMail}</Text>
    </View>
    <Text>{schedule}</Text>
  </View>

export default CurrentPrice

const styles = StyleSheet.create({
  currPrice: {
    width: '95%',
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
})

CurrentPrice.propTypes = {
  schedule: PropTypes.string.isRequired,
  goodToGo: PropTypes.string.isRequired,
  payByMail: PropTypes.string.isRequired,
  dayName: PropTypes.string.isRequired,
  holidayName: PropTypes.string,
}