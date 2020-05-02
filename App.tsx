import React, {Component} from 'react';
import {View} from 'react-native';
import {createStore} from "redux";
import {Provider} from "react-redux";
// @ts-ignore
import reducer from './reducers';

// @ts-ignore
import AddEntry from './components/AddEntry';

export default class App extends Component {
  componentDidMount() {
    console.log("before");
    console.log("after");
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
      <View style={{flex: 1}}>
        <AddEntry/>
      </View>
      </Provider>
    );
  }


}

