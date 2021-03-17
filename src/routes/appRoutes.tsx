import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../pages/Signin';


const AppStack = createStackNavigator()

export default function AppRoutes(){
    return (
        <AppStack.Navigator>
            <AppStack.Screen name="SignIn" component={SignIn} />
        </AppStack.Navigator>
    )
}
