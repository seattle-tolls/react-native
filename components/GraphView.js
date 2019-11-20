import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import Svg, { Circle, Rect, G } from 'react-native-svg'

import * as scale from 'd3-scale'
import * as shape from 'd3-shape'
import * as d3Array from 'd3-array'

const d3 = { scale, shape }

console.log('D3--->', d3.shape, d3.scale)

// const { Path } = Svg
const { width } = Dimensions
const height = 200

const GraphView = () => {

const timesArray = [20, 50, 80, 30, 55, 20]

  return (
    <View style={styles.graphView}>
      <Svg {...{ width, height }}>
        <G>
          {timesArray.map((rec, i) => 
            <Rect key={i} width={10} height={rec} x={10*i} y={10} fill="blue" rx={"5"} ry={"5"}/>
          )}
        </G>
      </Svg>
    </View>
  )
}

export default GraphView

const styles = StyleSheet.create({
  graphView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#0f0',
  },
})
