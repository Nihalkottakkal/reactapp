import React from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";


const Login = ({navigation}) => {
    return (
        <View style={Styles.container}>
            <View>
                <Text style={Styles.head}>Login</Text>
                <TextInput style={Styles.uname} placeholder="Username"></TextInput>
                <TextInput style={Styles.pass} placeholder="Password" secureTextEntry={true}></TextInput>
                <TouchableOpacity style={Styles.button1} onPress={()=>navigation.navigate('home')}>
                    <Text style={Styles.signup}>Login</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Login



const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FEF3C2',


    },

    

    head: {
        fontSize: 35,
        fontWeight: 'bold',
        bottom: 120,
        color: '#7D6D28',
        textTransform: 'uppercase'
    },

    uname: {
        width: 250,
        height: 40,
        backgroundColor: '#ffffff',
        borderRadius: 13,
        bottom: 70


    },

    pass: {
        width: 250,
        height: 40,
        backgroundColor: '#ffffff',
        borderRadius: 13,
        bottom: 50
    },



    button1: {
        height: 40,
        width: 250,
        borderRadius: 13,
        backgroundColor: '#DECD84',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 30


    },

    signup: {
        color: '#7D6D28',
        fontSize: 20,
        textTransform: 'uppercase',
        fontWeight: 'bold',

    },


})