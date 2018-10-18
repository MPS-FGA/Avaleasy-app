import { StyleSheet } from "react-native";

const profileStyle = StyleSheet.create ({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  titlePage: {
    color: '#ffffff', 
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  button: {
    backgroundColor: '#0a920a',
    fontSize: 24,
    fontWeight: 'bold',
    borderRadius: 5, 
    alignSelf: "center",
    marginTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
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

});

export default profileStyle;