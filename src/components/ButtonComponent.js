import React, {Component} from 'react';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';

export class ButtonComponent extends Component {
    render() {
        const { label, style, ...props } = this.props;
            
        return (
            <TouchableHighlight {...props} underlayColor="white">
            <View style={style}>
              <Text style={styles.textButton}> {label} </Text>
            </View>
          </TouchableHighlight>
        );
      }
}

const styles = new StyleSheet.create ({
    textButton: {
        color: '#FFFFFF',
        padding: 20,
      }
});