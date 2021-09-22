import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity, Alert, Dimensions } from 'react-native';
const axios = require('axios');







const Home = ({ navigation }) => {
    const [data,setData] = useState([])

    


    // const [users, setUsers] = useState([
    //     {
    //         id: 1,
    //         Name: 'Nihal',
    //         Age: 22,
    //         Place: 'Kakkodi'
    //     },

    //     {
    //         id: 2,
    //         Name: 'Nehna',
    //         Age: 25,
    //         Place: 'Kakkodi'
    //     },

    //     {
    //         id: 3,
    //         Name: 'Hidash',
    //         Age: 29,
    //         Place: 'Kakkodi'
    //     },

    //     {
    //         id: 4,
    //         Name: 'Ismail',
    //         Age: 56,
    //         Place: 'Kakkodi'
    //     },

    //     {
    //         id: 5,
    //         Name: 'Sereena',
    //         Age: 45,
    //         Place: 'Kakkodi'
    //     }
    // ])

    const handleDelete = (id) => {
        const deleted = data.filter((items) => (
            items.id !== id
        ))
        const showAlert=()=>{
            Alert.alert(
                "Delete",
                "Confirm Delete?",
                [
                    {
                        onPress: () => Alert.alert("Cancel Pressed")
                    },
                ],
                {
                    cancelable: true,
                    onDismiss: () =>
                      Alert.alert()
                  }
            )
        }
        setData(deleted)
    }

    const handleUpdate = (id,name) => {
        const updated = users.find((items) => (
            items.id == id && 
            items.Name == name
        ))
        alert(id && name)
    }
    

    function fetchdata(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function(response){
            console.log(response.data);
            setData(response.data)
            
        })
    }


    useEffect(() => {
        fetchdata()
    }, [])

    
    const deviceWidth = Dimensions.get('window').width

    return (
        <ScrollView style={Styles.scroll}>
        <View style={Styles.container}>
            {data.map((items) => {
                return (
                    <View style={Styles.card} key={items.id}>
                        <Text style={Styles.name}>
                            {items.name}
                        </Text>
                        <Text style={Styles.age}>
                            {items.Age}
                        </Text>
                        <Text style={Styles.place}>
                            {items.Place}
                        </Text>
                        <TouchableOpacity style={Styles.delete} onPress={() => handleDelete(items.id)}>
                            <Text>Delete</Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity style={Styles.delete} onPress={() => handleUpdate(items.id, items.Name)}>
                            <Text>Update</Text>
                        </TouchableOpacity> */}
                        <Button title="uodate"></Button>
                    </View>
                )
            })}
        </View>
        </ScrollView>
    )
}

export default Home





const Styles = StyleSheet.create({
    scroll: {
        flex: 1,
        backgroundColor: '#fff',
        height:'100%',
    },

    container: {
        display:'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#FFE5A0',
        justifyContent:'space-evenly',
        textAlign:'center',
        paddingBottom:40

    },

    card: {
        
        borderRadius: 10,
        flexWrap: 'wrap',
        height: 'auto',
        width: 340,
        backgroundColor: '#ECC36D',
        marginTop: 20,
        marginVertical: -10,
        marginStart: 15,
        marginEnd: 15,
        padding: 10,
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
        margin:40
        
    },

    name: {
        fontSize: 15,
        fontWeight: 'bold',
        width:'100%',
        textAlign:'center',
    },

    age: {
        fontSize: 15,
        fontWeight: 'bold'
    },

    place: {
        fontSize: 15,
    },

    delete: {
        backgroundColor: '#FC5D53',
        height: 30,
        width: 130,
        alignItems: 'center',
        justifyContent: 'center',
    },

    update:{
        justifyContent:'center',
        marginTop:40,
        color:'#000'
    }
})