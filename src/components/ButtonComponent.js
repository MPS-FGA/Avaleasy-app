import React, {Component} from 'react';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';

export class ButtonComponent extends Component {
    render() {
        const { label, style, styleText, ...props } = this.props;
            
        return (
            <TouchableHighlight {...props} underlayColor="white">
            <View style={style}>
              <Text style={styleText}> {label} </Text>
            </View>
          </TouchableHighlight>
        );
      }
}