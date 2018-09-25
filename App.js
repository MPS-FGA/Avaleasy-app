import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image } from 'react-native';

import { Wallpaper } from "./login/background";

export default class Login extends React.Component {
  _onPressEnter(){
    Alert.alert('You tapped the button!')
  }

  _signUp() {
    Alert.alert('You will can sign up soon!')
  }

  constructor(props) {
    super(props);
    this.state = { email: 'Email', password: '' };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('./images/wallpaper.png')}/>


          <TextInput style={styles.textInput} onChangeText={(email) => this.setState({email})}
          value={this.state.email} />
          <TextInput style={styles.textInput} secureTextEntry={true} onChangeText={(password) => this.setState({password})}
          value={this.state.password} />

          <Button styles={styles.button} onPress={this._onPressEnter} title="ENTRAR" />
          <Button styles={styles.button} onPress={this._signUp} title="CADASTRA-SE" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },

  image: {
    marginTop: 50,
    marginBottom: 50,
    alignSelf: 'center',
  },

  textInput: {
    fontSize: 16,
    marginBottom: 30
  },

  button: {
    marginTop: 50,
    marginLeft: 30,
    marginRight: 30,
  },
});
