import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#aa0505'
  },
  img:{
    resizeMode: 'contain',
    height: 150
  }
});