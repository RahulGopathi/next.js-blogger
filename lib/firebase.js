import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyD1OA4ZowhfqGy9HpkyZEhAHW5-w6XYQP8",
    authDomain: "next-blogger-6b1a9.firebaseapp.com",
    projectId: "next-blogger-6b1a9",
    storageBucket: "next-blogger-6b1a9.appspot.com",
    messagingSenderId: "659445726058",
    appId: "1:659445726058:web:cc401a496e35729e40c313",
    measurementId: "G-37BQVY1Q78"
};

if (!firebase.getApps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()