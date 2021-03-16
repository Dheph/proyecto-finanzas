import react from  'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Signin from '../pages/Signin';

const AuthStack = createStackNavigator()

function AuthRoutes(){
    return (
        <NavigationContainer>
        </NavigationContainer>
    )
}