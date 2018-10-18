import React, { Component } from 'react';
import { Text, View } from 'react-native';

import profileStyle from "../styles/ProfileStyle";
import { ButtonComponent } from '../components/ButtonComponent';

export default class ProfileHeader extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;

    return(
      <View style={profileStyle.container}>
        <Text style={profileStyle.titlePage}> Meu Perfil </Text>
        <ButtonComponent 
         onPress={() => navigate('Profile', {idLogged: '5bba73c0a4b7390044221e05'})}
          style={profileStyle.button}
          styleText={profileStyle.textButton}
          label="Editar" 
        />
      </View>
    )
  }
}