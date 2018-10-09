import { React, Component } from 'react'
import { View, StyleSheet } from 'react-native'
import t from 'tcomb-form-native'

const Form = t.form.Form

const ExamModel = t.struct({
  name: t.String,
  description: t.String,
  nmbr_questions: t.Integer,
  
})

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
  }
}

export default class CreateExamModel extends Component {
  handleSubmit = () => {
    const value = this._form.getValue()
    
    // FIXME:
    // baseUrl must be replaced with actual server url
    let baseUrl = 'http://localhost:3000/'

    fetch(baseUrl + '/examsTemplates/new', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(value)
    })
    .catch((err) => {
      console.error(error)
    })
  }
  
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
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#fafafa',
  },
})
