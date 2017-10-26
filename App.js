import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase'; 
import ReduxThunk from 'redux-thunk';
import Router from './Router'
import reducers from './src/reducers';

export default class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: 'AIzaSyDp-rd-9DYMyjpo4uc-lUtKPeonTWqTNVw',
      authDomain: 'alarm-93ae1.firebaseapp.com',
      databaseURL: 'https://alarm-93ae1.firebaseio.com',
      projectId: 'alarm-93ae1',
      storageBucket: 'alarm-93ae1.appspot.com',
      messagingSenderId: '490577495129'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

