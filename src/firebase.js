import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA-aTcG2GoHG-J5E_emgSQGCBg116bKs7o",
  authDomain: "swe363-8358e.firebaseapp.com",
  databaseURL: "https://swe363-8358e.firebaseio.com",
  projectId: "swe363-8358e",
  storageBucket: "swe363-8358e.appspot.com",
  messagingSenderId: "26581632421",
  appId: "1:26581632421:web:a9005a7cd31370de9d144c"
}

firebase.initializeApp(firebaseConfig)

export default firebase