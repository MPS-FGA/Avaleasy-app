import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

export class FloatingLabelInput extends Component {
  state = {
    isFocused: false,
  };

  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });

  render() {
    const { label, ...props } = this.props;
    const { isFocused } = this.state;
    const labelStyle = {
      left: 25,
      top: !isFocused ? 18 : 0,
      fontSize: !isFocused ? 20 : 14,
      color: '#000',
    };

    return (
      <View style={{ paddingTop: 18 }}>
        <Text style={labelStyle}>
          {label}
        </Text>
        <TextInput
          {...props}
          style={styles.inputStyle}
          onFocus={this.handleFocus}
          blurOnSubmit
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputStyle: {
    height: 40,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 18,
    color: '#000',
    borderBottomColor: '#555',
  },
})