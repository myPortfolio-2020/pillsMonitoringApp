// Global styleSheet
import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  screenPad: {    
    padding: 16   
  },
  fullSpreadBtn:{
    backgroundColor:'#1BB9E6',
    padding:11,  
    color:'#fff',
    textAlign:'center',
    borderRadius:5,
    fontSize:19
  },
  textInput:{
    backgroundColor:'#F4F4F4',
    borderWidth:1,
    borderColor:'#E6E4E4',
    padding:11,
    marginTop:8,
    marginBottom:8,
    borderRadius:5,
    minWidth:54  
  }
});

export default globalStyles;