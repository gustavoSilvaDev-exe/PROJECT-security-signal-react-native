import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container:{
    width: 300,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  },
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#dddcff',
    borderRadius: 10,
    elevation: 10
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#212121'
  }
});