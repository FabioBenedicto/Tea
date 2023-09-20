import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
    backgroundColor: '#FF8989',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
        width: 0,
        height: 2,
    },
  },
  text: {
    fontFamily: 'Inter_500Medium',
    fontSize: 36,
    color: '#333333',
  }
});