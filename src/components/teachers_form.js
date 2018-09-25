'use strict';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const Teacher = t.struct({
  name: t.String,
  email: t.String,
  password: t.String,
});

const options = {
  fields: {
    name: {
      error: '* Este campo é obrigatório'
    },
    email: {
      error: '* Este campo é obrigatório'
    },
    password: {
      error: '* Este campo é obrigatório'
    },
  },
  stylesheet: formStyles,
};

export default class TeacherForm extends Component{

  handleSubmit = () => {
    const value = this.refs.form.getValue();

    // The 'localhost' should be swapped with the ipv4 adress shown in show-adress.sh
    fetch('http://localhost:3000/teachers/new', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(value)
    })
    .catch(function(error) {
       console.error(error);
    });
  }

  render(){
    return (
      <View style={styles.container}>
        <Form
          ref="form"
          type={Teacher}
          options={options}
        />
        <Button
          style={styles.button}
          title="Cadastrar"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

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
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  button: {
    color: '#7FFF00'
  },
});
