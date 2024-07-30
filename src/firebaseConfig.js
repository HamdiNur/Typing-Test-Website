import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// console.log(process.env.REACT_APP_API_KEY);
const firebaseConfig = {
  apiKey: "AIzaSyAMkhJN8o_21dE-HYZnwnMZws9NhhHU-R4",
  authDomain: "virtualtype-a6fad.firebaseapp.com",
  projectId: "virtualtype-a6fad",
  storageBucket: "virtualtype-a6fad.appspot.com",
  messagingSenderId: "149442964893",
  appId: "1:149442964893:web:4f4702da29d7e537ad1374",
  measurementId: "G-4GB4JHPKE1"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();

export {auth, db}