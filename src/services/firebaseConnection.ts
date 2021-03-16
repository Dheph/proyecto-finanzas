import firebase from 'firebase';
import 'firebase/database'
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };

  if(!firebase.app.length){
      firebase.initializeApp(firebaseConfig)
  }

  export {firebase}