import React from 'react';
import {Slider, StyleSheet, Text, View} from 'react-native';
import {gray, purple, white} from "../utils/colors";

export default function UdaciSlider({max, units, step, value, onChange}) {
  return (
    <View style={[styles.row, {justifyContent: 'space-between'}]}>
      <Slider style={{flex: 1, alignItems: 'center'}}
              step={step}
              value={value}
              maximumValue={max}
              minimumValue={0}
              onValueChange={onChange}
      />
      <View style={[styles.metricCounter]}>
        <Text style={{fontSize: 24, textAlign: 'center'}}>{value}</Text>
        <Text style={{fontSize: 18, color: gray}}>{units}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
  },
  iosButton: {
    backgroundColor: white,
    borderColor: purple,
    borderWidth: 1,
    borderRadius: 3,
    padding: 5,
    paddingLeft: 25,
    paddingRight: 25
  },
  androidButton: {
    margin: 5,
    backgroundColor: purple,
    padding: 10,
    borderRadius: 2
  },
  metricCounter: {
    width: 85,
    justifyContent: 'center',
    alignItems: 'center'
  }

})
