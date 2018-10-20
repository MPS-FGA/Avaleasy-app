import { StyleSheet } from 'react-native';

const profileStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  title: {
    color: '#ffffff',
    textAlign: 'left',
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  button: {
    backgroundColor: '#0a920a',
    textAlign: 'right',
    fontSize: 24,
    fontWeight: 'bold',
    borderRadius: 5,
    marginRight: 15,
  },

  textButton: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'white',
    padding: 10,
  },

  nameStyle: {
    fontSize: 32,
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  contentStyle: {
    fontSize: 14,
    alignSelf: 'center',
  },

  deleteButton: {
    backgroundColor: '#ff0000',
    textAlign: 'right',
    fontSize: 24,
    fontWeight: 'bold',
    borderRadius: 5,
    marginRight: 15,
  },

});

export default profileStyle;
