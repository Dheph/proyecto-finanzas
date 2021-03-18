import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../pages/Signin';
import SignUp from '../pages/SignUp';


const AuthStack = createStackNavigator()

export default function AuthRoutes(){
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen 
            name="SignIn" 
            component={SignIn} 
            options={
                {headerShown:false}
            }/>
            <AuthStack.Screen 
            name="SignUp"
            component={SignUp}
            options={{
              headerStyle:{
                backgroundColor:"#1d3357",
                borderBottomWidth:1,
                borderBottomColor:"#e63946"
              },
              headerTintColor:"#f1faee",
              headerBackTitleVisible:false,
              headerTitle:"Back"
            }}
            />
        </AuthStack.Navigator>
    )
}
