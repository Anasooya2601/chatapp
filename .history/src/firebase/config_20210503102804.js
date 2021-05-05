import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import {useAuthState} from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'

firebase.initializeApp({
    apiKey: "AIzaSyD_gO6wgxb9HVgHoIJOL0tEWTpRXYgvHlU",
    authDomain: "chatapp-26eb3.firebaseapp.com",
    projectId: "chatapp-26eb3",
    storageBucket: "chatapp-26eb3.appspot.com",
    messagingSenderId: "371207442697",
    appId: "1:371207442697:web:486481dbf6de075e0e03d8",
    measurementId: "G-X09SF88D23"
})

const auth=firebase.auth();
const firestore = firebase.firestore();