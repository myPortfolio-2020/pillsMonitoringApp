import { StyleSheet } from 'react-native'
import {
    responsiveWidth, responsiveHeight 
} from 'react-native-responsive-dimensions'


export const commonStyles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    commBtn:{
        backgroundColor:"#ff0000",
        width: responsiveWidth(88),
        height:responsiveHeight(2.5)
    },
    dotStyle:{
        backgroundColor:"#dd44cc"
    },
    inputStyle:{
        padding:11,
        borderColor:'#ddd',
        margin:12
    }
})