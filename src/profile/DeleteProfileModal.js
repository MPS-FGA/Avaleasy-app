import React, { Component } from 'react';
import { Modal, View, Text, StyleSheet } from 'react-native';


export default class DeleteModal extends Component {

  deleteProfile(){
    var idLogged = navigation.getParam('idLogged', null);

    return fetch('http://' + LOCALHOST + ':3000/teachers/' + idLogged, { method: 'DELETE' })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson, 
        }, function(){});
      })
      .catch((error) => {
        console.error(error);
      });

  }

  render() {
    return(
      <Modal visible={this.props.display} anymationType = "slide"
        onRequestClose={ () => console.log('closed') }>

        <View>
          <Text>Modal aberta</Text>
        </View>

      </Modal>
    )
  }
}
