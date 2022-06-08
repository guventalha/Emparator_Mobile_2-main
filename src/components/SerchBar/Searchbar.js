import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { Metrics } from '../../Themes'

export default function Searchbar() {
  return (
    <View styyle={{
      borderColor: 'black',
      borderWidth:2
    }}>
    <TextInput
      style={{
        borderColor: 'red',
        borderWidth:1,
        width:Metrics.WIDTH * 0.95,
        height: Metrics.HEIGHT * 0.05,
        marginHorizontal: Metrics.WIDTH * 0.025,
        borderRadius: 15,
        backgroundColor: "#E0E0E0"

      }}
    ></TextInput>
    </View>
  )
}