import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'; 






const Newapp = ({navigation})=>{
    return(
        
        <View style={Styles.container}>
            <Text style={Styles.text}>Hello</Text>
            <TouchableOpacity style={Styles.button1} onPress={()=>navigation.navigate('login')}>
                <Text style={Styles.login}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.button2} onPress={()=>navigation.navigate('signup')}>
                <Text style={Styles.signup}>Signup</Text>
            </TouchableOpacity>
        </View>
    )
}








export default Newapp






const Styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FEF3C2',
        
        
    },

    text:{
        fontSize: 50,
        fontWeight:'bold',
        bottom:180,
        color:'#7D6D28'
    },

    button1:{
        height:40,
        width:250,
        borderRadius:13,
        backgroundColor:'#DECD84',
        alignItems:'center',
        justifyContent:'center',
        bottom:70,
        
    },

    login:{
        color:'#7D6D28',
        fontSize:20,
        textTransform:'uppercase',
        fontWeight:'bold'
    },

    button2:{
        height:40,
        width:250,
        borderRadius:13,
        backgroundColor:'#DECD84',
        alignItems:'center',
        justifyContent:'center',
        bottom:50,
        
    },

    signup:{
        color:'#7D6D28',
        fontSize:20,
        textTransform:'uppercase',
        fontWeight:'bold'
    }
})