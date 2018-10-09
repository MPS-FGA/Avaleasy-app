import React, {Component} from 'react';
import { Text, View } from 'react-native';

import profileStyle from "../styles/ProfileStyle";
import { ButtonComponent } from '../components/ButtonComponent';

export default class ProfileHeader extends React.Component {
  render() {
    return(
      <View style={profileStyle.container}>
        <Text style={profileStyle.title}> Meu Perfil </Text>
        <ButtonComponent style={profileStyle.button} styleText={profileStyle.textButton} label="Editar" />
      </View>
    )
  }
}