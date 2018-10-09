import React, { Component } from 'react';
import { StyleSheet, FlatList, ActivityIndicator, Text, View  } from 'react-native';
import { Card } from 'react-native-elements';

export default class ExamTemplateList extends Component {

  constructor(props){
    super(props);
    this.state = { isLoading: true}
  }

  componentDidMount(){
    // The 'localhost' should be swapped with the ipv4 adress shown in show-adress.sh
    return fetch('http://172.29.42.228:3000/examsTemplates/')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render(){
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={styles.examTemplateStyle}>
        <FlatList
          styles={styles.container}
          data={this.state.dataSource}
          renderItem={
            ({ item }) =>
              <Card>
                <Text style={styles.item}>{item.title}</Text>
                <Text><Text style={styles.item}>Pontuação total:</Text> {item.value}</Text>
                <View
                  style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    margin: 30,
                  }}
                />
                <View style={styles.question}>
                <Text style={styles.data}>Questões Objetivas</Text>
                <FlatList 
                  data={item.objectiveQuestions} 
                  listKey={(item, index) => 'D' + index.toString()}
                  renderItem={
                    ({item}) => (
                      <View>
                        <Text><Text style={styles.item}>Título:</Text> {item.title}</Text>
                        <Text><Text style={styles.item}>Pontuação:</Text> {item.punctuation}</Text>
                      </View>
                    )
                  }  
                />
                </View>
                <View
                  style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    margin: 30,
                  }}
                />
                <FlatList 
                  data={item.tblQuestions} 
                  listKey={(item, index) => 'D' + index.toString()}
                  renderItem={
                    ({item}) =>
                      <View>
                        <Text>{item.title}</Text>
                        <Text>{item.punctuation}</Text>
                        <Text>{item.alternative1Content}</Text>
                        <Text>{item.alternative2Content}</Text>
                        <Text>{item.alternative3Content}</Text>
                        <Text>{item.alternative4Content}</Text>
                      </View>
                  }  
                />
                <FlatList 
                  data={item.multipleChoiceQuestions} 
                  listKey={(item, index) => 'D' + index.toString()}
                  renderItem={
                    ({item}) =>
                      <View>
                        <Text>{item.title}</Text>
                        <Text>{item.punctuation}</Text>
                        <Text>{item.numberOfAlternatives}</Text>
                        <FlatList
                          data={item.multipleChoiceAlternatives}
                          listKey={(item, index) => 'D' + index.toString()}
                          renderItem={
                            ({item}) =>
                              <View>
                                <Text>{item.content}</Text>
                              </View>
                          }
                        />
                      </View>
                  }  
                />
                <FlatList 
                  data={item.tfQuestions} 
                  listKey={(item, index) => 'D' + index.toString()}
                  renderItem={
                    ({item}) =>
                      <View>
                        <Text>{item.title}</Text>
                        <Text>{item.punctuation}</Text>
                        <Text>{item.value}</Text>
                      </View>
                  }  
                />
            </Card>
          }
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
}

const examTemplateStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 30,
  },
  data: {
    fontWeight: 'bold',
  },
  question: {
    
  }

});
