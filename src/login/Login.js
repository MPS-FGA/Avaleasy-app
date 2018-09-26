import React, {Component} from 'react';
import { StyleSheet, View, Alert, Image, TouchableHighlight, Text } from 'react-native';
import { FloatingLabelInput } from '../components/FloatingLabelInput';
import { ButtonComponent } from '../components/ButtonComponent';

export default class Login extends Component {
  _login(){
    Alert.alert('You tapped the button!')
  }

  _signUp() {
    Alert.alert('You will can sign up soon!')
  }

  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../../images/avaleasy.png')}/>

          <FloatingLabelInput 
            label="Email"
            value={this.state.email}
            keyboardType="email-address"
            onChangeText={(email) => this.setState({email})}
          />

          <FloatingLabelInput
            label="Senha"
            secureTextEntry={true}
            onChangeText={(password => this.setState({password}))}
          />

          <ButtonComponent 
            onPress={this._login}
            title="ENTRAR"
            label="ENTRAR"
            style={styles.buttonLogin} 
          />

          <ButtonComponent
            onPress={this._signUp}
            title="CADASTRAR-SE"
            label="CADASTRAR-SE"
            style={styles.buttonSignUp} 
          />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },

  image: {
    marginTop: 50,
    marginBottom: 25,
    width: 150,
    height: 150,
    alignSelf: 'center',
  },

  buttonLogin: {
    width: 300,
    marginTop: 20,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#00cc00',
  },

  buttonSignUp: {
    width: 300,
    marginTop: 20,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#cdcdcb',
  },
});
