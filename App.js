import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import t from 'tcomb-form-native';

import Login from './src/login/Login';
import {ButtonComponent} from "./src/components/ButtonComponent";
import TeacherForm from './src/components/teachers_form.js'
import Profile from './src/profile/Profile';
import CreateExamModel from './src/examModel/createExamModel'

const Form = t.form.Form;

const App = createStackNavigator({
    Home: { screen: Login },
    SignUp: { screen: TeacherForm },
    Profile: { screen: Profile },
    CreateExamModel: { screen: CreateExamModel },
});

export default App;
