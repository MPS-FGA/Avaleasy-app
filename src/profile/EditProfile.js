import React from 'react';
import { View } from "react-native";
import { FloatingLabelInput } from '../components/FloatingLabelInput';
import { LOCALHOST } from '../../localhost';
import profileStyle from '../styles/ProfileStyle';
import { ButtonComponent } from '../components/ButtonComponent';

export default class EditProfile extends React.Component{
  static navigationOptions = {
    title: 'Editar Perfil',
  };

  constructor(props) {
    super(props);
    this.state = { name: '', newPassword: '', isLoading: true };
  }

  componentDidMount(){
    const { navigation } = this.props;
    var idLogged = navigation.getParam('idLogged', null);
    // The 'localhost' should be swapped with the ipv4 adress shown in show-adress.sh
    return fetch('http://' + LOCALHOST + ':3000/teachers/' + idLogged)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){});
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  editProfile(){
    const { navigation } = this.props;
    var idLogged = navigation.getParam('idLogged', null);

    fetch('http://'+ LOCALHOST +':3000/teachers/edit/' + idLogged, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: {
        'name': this.name,
        'password': this.password,
      }
    })
    .catch(function(error) {
       console.error(error);
    });
  }

  render() {
    if(this.state.isLoading){
      return(
        <View />
      )
    }
    
    const data = this.state.dataSource;
    const password = data.password;

    return(
      <View>
        <FloatingLabelInput
          label="Nome"
          value={data.name}
          onChangeText={(name) => this.setState({name})}
        />

        <FloatingLabelInput
            label="Senha"
            secureTextEntry={true}
            onChangeText={(newPassword => this.setState({newPassword}))}
        />

        <ButtonComponent
            onPress={this.editProfile()}
            label="Enviar"
            style={profileStyle.button}
            styleText={profileStyle.textButton}
        />

      </View>
    );
  }
}