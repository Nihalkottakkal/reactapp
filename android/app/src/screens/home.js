import React from "react";
import {View,Text,StyleSheet, Button} from 'react-native';



const Home = ({navigation})=>{
    return(
        <View style={Styles.container}>
            <Text> Hello</Text>
            <Button title="logout" onPress={()=>navigation.navigate('splash')}></Button>
        </View>
    )
}

export default Home





const Styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    hello:{
        height:40,
        width:250,
        backgroundColor:"grey"
    }
})