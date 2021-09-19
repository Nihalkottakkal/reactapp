import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator } from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'


import splash from '../reactapp/android/app/src/screens/splash'
import signup from '../reactapp/android/app/src//screens/signup';
import Login from './android/app/src/screens/login';
import Home from './android/app/src/screens/home';



const tab = createBottomTabNavigator()
const stack = createStackNavigator()
const drawer = createDrawerNavigator()

const App = ({})=>{
    return(
        <NavigationContainer>

            <tab.Navigator defaultStatus={'open'} initialRouteName={'splash'}>

                <tab.Screen name='splash'  component={splash}>
                </tab.Screen>
                <tab.Screen name='signup' component={signup}>
                </tab.Screen>
                <tab.Screen name='login' component={Login}> 
                </tab.Screen>
                <tab.Screen name='home' component={Home}> 
                </tab.Screen>

            </tab.Navigator>

        </NavigationContainer>
    )
}

export default App


