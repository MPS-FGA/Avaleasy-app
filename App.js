import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class Login extends React.Component {
  _onPressEnter(){
    Alert.alert('You tapped the button!')
  }
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput onChangeText={(email) => this.setState({email})}
        value={this.state.email} />
        <TextInput secureTextEntry={true} onChangeText={(password) => this.setState({password})}
        value={this.state.password} />
        <Button onPress={this._onPressEnter} title="ENTRAR"
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
