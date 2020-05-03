import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {addEntry, receiveEntries} from "../actions";
import {fetchCalendarResults} from "../utils/Api";
import {getDailyRemainderValue, timeToString} from "../utils/helpers";
import UdaciFitnessCalendar from 'udacifitness-calendar-fix'

class History extends Component {
  componentDidMount() {
    const {dispatch} = this.props;
    fetchCalendarResults()
      .then((entries) => dispatch(receiveEntries(entries)))
      .then(({entries}) => {
        if (!entries[timeToString()]) {
          dispatch(addEntry({
            [timeToString()]: getDailyRemainderValue()
          }))
        }
      })
  }

  renderItem = ({today, ...metrics}, formattedDate, key) => (
    <View>
      {

        today
        ? <Text>{JSON.stringify(today)}</Text>
        : <Text>{JSON.stringify(metrics)}</Text>}
    </View>
  )

  renderEmptyDate(formattedDate) {
    return (
      <View>
        <Text>No data for this day</Text>
      </View>
    )
  }

  render() {
    const {entries} = this.props;
    return (
      <UdaciFitnessCalendar
        items={entries}
        renderItem={this.renderItem}
        renderEmptyDate={this.renderEmptyDate}
      />
    )
  }
}

function mapStateToProps(entries) {
  return {
    entries
  }
}

export default connect(mapStateToProps)(History);
