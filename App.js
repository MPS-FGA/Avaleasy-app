import React, { Component } from 'react';
import { View } from 'react-native';
import Login from './src/login/Login.js';

export default class App extends Component {
  render() {
    return (
      <View>
        <Login />
      </View>
    );
  }
}