import React, { Component } from 'react';
import { StyleSheet, ScrollView, Alert, Image } from 'react-native';

import { FloatingLabelInput } from '../components/FloatingLabelInput';
import { ButtonComponent } from '../components/ButtonComponent';
import generalStyle from "../styles/GeneralStyle";
import loginScreenStyle from "../styles/LoginScreenStyle";
import { AsyncStorage } from 'react-native';
import { LOCALHOST } from '../../localhost';


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

  handleSubmit = () => {
    const { navigate } = this.props.navigation;
    var jwt_decode = require('jwt-decode');

    fetch('http://' + LOCALHOST + ':3000/auth/sign-in', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
    .catch(function(error) {
       console.error(error);
    })
    .then(response => response.json())
    .then((response) => {
      var decoded = jwt_decode(response.token)
      console.log(response.token);
      console.log(decoded);
      console.log(decoded.teacherId);

      navigate('Profile', {idLogged: decoded.teacherId});
    });

  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView contentContainerStyle={generalStyle.container}>
        <Image style={generalStyle.image} source={require('../images/avaleasy.png')} />

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
            onPress={this.handleSubmit}
            title="ENTRAR"
            label="ENTRAR"
            style={loginScreenStyle.buttonLogin}
            styleText={generalStyle.textButton}
          />

          <ButtonComponent
            onPress={() => navigate('SignUp')}
            title="CADASTRAR-SE"
            label="CADASTRAR-SE"
            style={loginScreenStyle.buttonSignUp}
            styleText={generalStyle.textButton}
          />

          <ButtonComponent
            onPress={() => navigate('ExamTemplateList')}
            title="LISTAR-AVALIACOES"
            label="LISTAR AVALIAÇÔES"
            style={loginScreenStyle.buttonSignUp}
            styleText={generalStyle.textButton}
          />

      </ScrollView>
    );
  }
}
