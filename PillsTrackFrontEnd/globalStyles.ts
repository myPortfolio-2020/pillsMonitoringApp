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
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
  button: {
    backgroundColor: '#1e90ff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  BgHding:{
    fontSize:24,
    marginTop:20,
    marginBottom:20
  },
  logoStyle:{
    fontSize: 27,
    fontWeight:'bold'
  },
  primaryCol:{
    color:'#1BB9E6'
  },
  supportingCol:{
    color:'#FB2F6C'
  },
  MidTxt:{
    fontSize:24,
  },
  smTxt:{
    fontSize:12,
    letterSpacing:2,
    fontWeight:'bold'   
  },
  sliderCard:{
    backgroundColor:'#FFF5F1',
    borderColor:'#DDD',
    // shadowColor:'ddd',   
    maxWidth:340,
    marginBottom:20,
    marginTop:20,
    borderRadius:7
  },
  card:{
    backgroundColor:'#FFF5F1',
  },
  startBtn:{
    width:60,
    height:60,
    backgroundColor:'#1BB9E6', 
    borderRadius:50,
    verticalAlign:'middle',
    textAlign:'center',
    paddingTop:19,
    color:'#fff',
   marginTop:17,
    fontWeight:'bold',
    letterSpacing:2
  }
});

export default globalStyles;