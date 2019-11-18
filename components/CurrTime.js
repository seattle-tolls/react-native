import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CurrTime = ({currTime}) => {

  const {
    dayName,
    goodToGo,
    holidayName,
    payByMail,
    schedule,
  } = currTime
return (
  <View style={styles.timeSchedule}>
    <Text>{holidayName}</Text>
    <Text>{dayName}</Text>
    <Text>{`GoodToGo: ${goodToGo}`}</Text>
    <Text>{`PayByPhone: ${payByMail}`}</Text>
    <Text>{schedule}</Text>
  </View>
)
}
export default CurrTime

const styles = StyleSheet.create({
  timeSchedule: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cf0',
  },
})
