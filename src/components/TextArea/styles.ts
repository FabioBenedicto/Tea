import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    //marginBottom: 40,
    flexDirection: 'row', 
    alignItems: 'center',
},
textInput: {
  flex: 1,
  backgroundColor: 'transparent',
  justifyContent: 'flex-start',
  borderWidth: 2,
  borderColor: '#A3B1F1',
  borderRadius: 10,
  padding: 16,
  fontSize: 20,
  height: 120,
  zIndex: 1,
},
placeHolder: {
    position: 'absolute',
    fontFamily: 'Inter_500Medium',
    fontSize: 20,
    color: '#666666',
    backgroundColor: 'white',
    paddingHorizontal: 8,
    marginLeft: 8,
},
});