import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TeacherForm } from './src/components/teachers_form.js'
import t from 'tcomb-form-native';

const Form =t.form.Form;

const Teacher = t.struct({
  email: t.String,
  name: t.String,
  password: t.String,
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    },
  },
  controlLabel: {
    normal: {
      color: 'blue',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
    // the style applied when a validation error occours
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
}

const options = {
  fields: {
    email: {
      error: 'Without an email address how are you going to reset your password when you forget it?'
    },
    password: {
      error: 'Choose something you use on a dozen other sites or something you won\'t remember'
    },
  },
  stylesheet: formStyles,
};


export default class App extends Component {
  render() {
   return (
     <View style={styles.container}>
       <Form
         ref={c => this._form = c}
         type={Teacher}
         options={options} // pass the options via props
       />
       <Button
         title="Criar professor!"
         onPress={this.handleSubmit}
       />
     </View>
   );
 }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});
