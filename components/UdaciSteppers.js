import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {FontAwesome} from '@expo/vector-icons'

export default function UdaciSteppers({max, units, step, value, onIncrement, onDecrement}) {
  return (
    <View>
      <View>
        <TouchableOpacity onPress={onDecrement}>
          <FontAwesome name="minus" size={30} color={"black"}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={onIncrement}>
          <FontAwesome name="plus" size={30} color={"black"}/>
        </TouchableOpacity>
      </View>
      <View>
        <Text>{value}</Text>
        <Text>{units}</Text>
      </View>
    </View>
  )
}
