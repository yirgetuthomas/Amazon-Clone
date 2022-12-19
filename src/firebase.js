// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBYSR2TVpBAIcRq7maljMiQK7ZaMMitXXY",
    authDomain: "project-572ed.firebaseapp.com",
    projectId: "project-572ed",
    storageBucket: "project-572ed.appspot.com",
    messagingSenderId: "1036478025064",
    appId: "1:1036478025064:web:de5142bbd254847c2e1add",
    measurementId: "G-1VHHV8YZYN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  export { db, auth }