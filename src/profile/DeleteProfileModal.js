import React, { Component } from 'react';
import { Modal, View, Text, StyleSheet, TouchableHighlight, Button, Alert } from 'react-native';
import { AsyncStorage } from 'react-native';
import { LOCALHOST } from '../../localhost';
import { ButtonComponent } from '../components/ButtonComponent';

export default class DeleteModal extends Component {

  async deleteProfile() {
    const teacherId = await AsyncStorage.getItem('TEACHER_ID');

    return fetch('http://' + LOCALHOST + ':3000/teachers/' + teacherId, { 
      method: 'DELETE',
    })
      .then((response) => {
        return Alert.alert("Atenção", "Perfil DELETADO");
      })
  }

  render() {
    return(
      <Button onPress={this.deleteProfile}
        title="Deletar Perfil" />
    )
  }
}
