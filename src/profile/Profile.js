import React, {Component} from 'react';
import { StyleSheet, View, Alert, Image, TouchableHighlight, Text } from 'react-native';

import generalStyle from "../styles/GeneralStyle";
import ProfileHeader from './ProfileHeader';
import profileStyle from '../styles/ProfileStyle';
import { LOCALHOST } from '../../localhost';
import { ButtonComponent } from '../components/ButtonComponent';



export default class Profile extends Component {
  static navigationOptions = ({navigation}) => {
    //title: 'Meu Perfil',
<<<<<<< HEAD

=======

>>>>>>> Implemented edit profile (is not working).
    titleHeader: <ProfileHeader navigation={navigation} />
  };

  constructor(props) {
      super(props);
      this.state = { isLoading: true };
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

  render() {
    const { navigate } = this.props.navigation;

    if(this.state.isLoading){
      return(
        <View />
      )
    }

    const data = this.state.dataSource;
    return (
      <View style={generalStyle.container}>
        <Image style={generalStyle.image} source={require('../images/avaleasy.png')}/>
        <Text style={profileStyle.nameStyle}> {data.name} </Text>
        <Text style={profileStyle.contentStyle}> {data.email} </Text>

        <ButtonComponent
         onPress={() => navigate('EditProfile', {idLogged: '5bba73c0a4b7390044221e05'})}
          style={profileStyle.button}
          styleText={profileStyle.textButton}
          label="Editar"
        />
      </View>
    );
  }
}
