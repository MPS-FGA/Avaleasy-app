import React, { Component } from 'react';
import { StyleSheet, FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class ExamTemplateList extends Component {

  constructor(props){
    super(props);
    this.state = { isLoading: true}
  }

  componentDidMount(){
    // The 'localhost' should be swapped with the ipv4 adress shown in show-adress.sh
    return fetch('http://localhost:3000/examsTemplates/')
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
              <View style={styles.item}>
                <Text>{item.title}</Text>
                <Text>{item.value}</Text>
                <FlatList 
                  data={item.objectiveQuestions} 
                  listKey="ObjectiveQuestions"
                  renderItem={
                    ({item}) =>
                      <View>
                        <Text>{item.title}</Text>
                        <Text>{item.punctuation}</Text>
                      </View>
                  }  
                />
                <FlatList 
                  data={item.tblQuestions} 
                  listKey="tblQuestions"
                  renderItem={
                    ({item}) =>
                      <View>
                        <Text>{item.title}</Text>
                        <Text>{item.punctuation}</Text>
                      </View>
                  }  
                />
                <FlatList 
                  data={item.multipleChoiceQuestions} 
                  listKey="multipleChoiceQuestions"
                  renderItem={
                    ({item}) =>
                      <View>
                        <Text>{item.title}</Text>
                        <Text>{item.punctuation}</Text>
                      </View>
                  }  
                />
                <FlatList 
                  data={item.tfQuestions} 
                  listKey="tfQuestions"
                  renderItem={
                    ({item}) =>
                      <View>
                        <Text>{item.title}</Text>
                        <Text>{item.punctuation}</Text>
                      </View>
                  }  
                />
              </View>
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
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});
