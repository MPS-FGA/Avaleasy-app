import React, {Component} from 'react';
import { StyleSheet, View, Alert, Image, TouchableHighlight, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import generalStyle from "../styles/GeneralStyle";
import { ButtonComponent } from '../components/ButtonComponent';
import ProfileHeader from './ProfileHeader';
import profileStyle from '../styles/ProfileStyle';



export default class Profile extends Component {
  static navigationOptions = {
    title: 'Meu Perfil',
    headerTitle: <ProfileHeader />
  };

  constructor(props) {
      super(props);
      this.state = { isLoading: true};
  }

  componentDidMount(){
    const { navigation } = this.props;
    var idLogged = navigation.getParam('idLogged', null);
    // The 'localhost' should be swapped with the ipv4 adress shown in show-adress.sh
    return fetch('http://192.168.15.9:3000/teachers/'+ idLogged)
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
      </View>
    );
  }
}