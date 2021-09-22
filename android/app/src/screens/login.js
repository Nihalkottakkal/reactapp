import React, {useState} from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from "react-native";


const Login = ({navigation}) => {
    const [input,setInput] = useState([
        {
            id:1,
            name:"nihal",
            place:"kakkodi",
            age:22
        },

        {
            id:2,
            name:"nehna",
            place:"kakkodi",
            age:25
        },

        {
            id:3,
            name:"hidash",
            place:"kakkodi",
            age:29
        }
    ]
    )
    

    const name=(name)=>{
        alert(name)
    }

    const handleDelete=(id)=>{

     const filtered = input.filter((items)=>(
        items.id !== id
         
     ))
     setInput(filtered)
    }
    return (
        <View style={Styles.container}>
            <View>
                <Text style={Styles.head}>Login</Text>
                
                <TextInput style={Styles.uname} placeholder="Username" name='username'></TextInput>
                <TextInput style={Styles.pass} placeholder="Password" secureTextEntry={true}></TextInput>
                <TouchableOpacity style={Styles.button1} onPress={()=>navigation.navigate('home')}>
                
                    <Text style={Styles.signup}>Login</Text>
                </TouchableOpacity>
                {input.map((items)=>{
                    return(
                        
                        <View key={items.id}>

                        <TouchableOpacity>
                            <Text onPress={()=>name(items.name)}>
                                {items.name}
                            </Text>
                        </TouchableOpacity>
                        <Text>{items.place}</Text>
                        <Text>{items.age}</Text>
                        <Button title="delete" onPress={()=>handleDelete(items.id)}>
                        </Button>
                        
                        </View>
                    )
                })}
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