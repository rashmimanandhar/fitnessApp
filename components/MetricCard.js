import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import DateHeader from "./DateHeader";
import {gray} from "../utils/colors";
import {getMetricMetaInfo} from "../utils/helpers";

export default function MetricCard({date, metrics}) {
  return (
    <View>
      {date && <DateHeader date={date} />}
      {Object.keys(metrics).map((metric) => {
        const {getIcon, displayName, units, backgroundColor} = getMetricMetaInfo(metric);
        return (
          <View style={styles.metric} key={metric}>
            {getIcon()}
            <View style={{fontSize: 20 }}>
              <Text>{displayName}</Text>
              <Text style={{fontSize: 16, color: gray}}>{metrics[metric]} {units}</Text>
            </View>
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  metric: {
    flexDirection:'row',
    marginTop: 12
  }
})
