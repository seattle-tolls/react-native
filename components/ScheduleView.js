import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

function Item({ props }) {
  return (
    <View>
      <Text>{props.goodToGo}</Text>
      <Text>{props.payByMail}</Text>
      <Text>{props.schedule}</Text>
    </View>
  )
}

const ScheduleView = ({ currSchedule }) =>
  <View style={styles.scheduleView}>
    <FlatList
      data={currSchedule}
      renderItem={({ item }) => <Item props={item} />}
      keyExtractor={item => item.id}
    />
  </View>

export default ScheduleView

const styles = StyleSheet.create({
  scheduleView: {
    flex: 1,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
