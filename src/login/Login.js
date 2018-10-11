import React, { Component } from 'react';
import { StyleSheet, ScrollView, Alert, Image } from 'react-native';

import { FloatingLabelInput } from '../components/FloatingLabelInput';
import { ButtonComponent } from '../components/ButtonComponent';
import generalStyle from "../styles/GeneralStyle";
import loginScreenStyle from "../styles/LoginScreenStyle";


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
            onPress={() => navigate('Profile', {idLogged: '5bba73c0a4b7390044221e05'})}
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
