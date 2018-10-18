import { View, ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import t from 'tcomb-form-native';

import Login from './src/login/Login';
import TeacherForm from './src/signUp/teachers_form'
import Profile from './src/profile/Profile';
import EditProfile from "./src/profile/EditProfile";
import ExamTemplateList from './src/examTemplate/examTemplateList';
import ProfileHeader from './src/profile/ProfileHeader';

const Form = t.form.Form;

const App = createStackNavigator(
  {
    Home: { screen: Login },
    SignUp: { screen: TeacherForm },
    Profile: { screen: Profile },
    ExamTemplateList: { screen: ExamTemplateList},
    EditProfile: { screen: EditProfile }
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'green',
      },
      headerTintColor: '#fff',
    }
  }
);

export default App;
