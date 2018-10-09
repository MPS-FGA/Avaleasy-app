import React, { Component } from 'react';
import {
  StyleSheet, View, Alert, Image, TouchableHighlight, Text,
} from 'react-native';
import { FloatingLabelInput } from '../components/FloatingLabelInput';
import { ButtonComponent } from '../components/ButtonComponent';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../images/avaleasy.png')} />
      </View>
    );
  }
}
