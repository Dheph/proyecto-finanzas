import firebase from 'firebase';
import {FIREBASE} from '../../.env.json'
import 'firebase/database'
import 'firebase/auth';

const firebaseConfig = {
    apiKey: FIREBASE.API_KEY,
    authDomain: FIREBASE.AUTH_DOMAIN,
    projectId: FIREBASE.PROJECT_ID,
    storageBucket: FIREBASE.STORAGE_BUCKET,
    messagingSenderId: FIREBASE.MESSAGING_SENDER_ID,
    appId: FIREBASE.APP_ID,
    measurementId: FIREBASE.MEASUREMENT_ID
  };

  if(!firebase.app.length){
      firebase.initializeApp(firebaseConfig)
  }

  export {firebase}