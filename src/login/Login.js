import React, { Component } from 'react';
import { StyleSheet, ScrollView, Alert, Image } from 'react-native';

import { FloatingLabelInput } from '../components/FloatingLabelInput';
import { ButtonComponent } from '../components/ButtonComponent';


export default class Login extends Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  _login(){
    Alert.alert('You tapped the button!')
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image style={styles.image} source={require('../images/avaleasy.png')} />

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
            onPress={() => navigate('SignUp')}
            title="CADASTRAR-SE"
            label="CADASTRAR-SE"
            style={styles.buttonSignUp}
          />

      </ScrollView>
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
