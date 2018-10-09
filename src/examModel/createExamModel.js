import { React, Component } from 'react';
import { View, StyleSheet } from 'react-native';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const ExamModel = t.struct({
  name: t.String,
  description: t.String,
  nmbr_questions: t.Integer,
  grade: t.Float,
  test_type: t.type,
});

const formOptions = {
  fields: {
    name: {
      error: 'O modelo de avaliação deve possuir um nome',
    },
    description: {
      error: 'O modelo de avaliação deve possuir uma descrição',
    },
    nmbr_questions: {
      error: 'O modelo de avaliação deve possuir questões',
    },
    grade: {
      error: 'O modelo de avaliação deve possuir nota',
    },
    test_type: {
      error: 'O modelo de avaliação deve possuir tipo',
    },
  },
};

export default class CreateExamModel extends Component {
  handleSubmit = () => {
    const value = this._form.getValue();

    // FIXME:
    // baseUrl must be replaced with actual server url
    const baseUrl = 'http://localhost:3000/';

    fetch(`${baseUrl}/examsTemplates/new`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(value),
    })
      .catch((err) => {
        console.error(err);
      });
  }

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      marginTop: 50,
      padding: 20,
      backgroundColor: '#fafafa',
    },

  render() {
    return (
      <View style={styles.container}>
        <Form
          type={ExamModel}
          ref={c => this._form = c}
          options={formOptions}
        />
        <Button
          title="Criar modelo"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

});
