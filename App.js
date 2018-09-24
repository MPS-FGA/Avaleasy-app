import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import TeacherForm from './src/components/teachers_form.js'
import t from 'tcomb-form-native';

const Form = t.form.Form;

export default class App extends Component {
  render() {
   return (
     <View>
       <TeacherForm/>
     </View>
   );
 }
}
