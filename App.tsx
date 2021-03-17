import 'react-native-gesture-handler';
import React from 'react';
import firebase from './src/services/firebaseConnection';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Text style={styles.menuText}>Proyecto finanzas</Text>
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#423F3F',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   menuText:{
//     color:'#C8C4C4',
//     fontSize:20,
//     width:250,
//     textAlign:'center'
//   }
// });
