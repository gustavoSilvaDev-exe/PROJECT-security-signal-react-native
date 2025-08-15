import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#aa0505',
    borderColor: '#fbca03',
    borderRadius: 10,
    elevation: 10
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white'
  }
});