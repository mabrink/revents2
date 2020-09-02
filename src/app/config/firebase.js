import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD0sqIyEyCMre_z9pHY6KqR2AlTsgI-Uqk",
    authDomain: "reventscourse-a16ee.firebaseapp.com",
    databaseURL: "https://reventscourse-a16ee.firebaseio.com",
    projectId: "reventscourse-a16ee",
    storageBucket: "reventscourse-a16ee.appspot.com",
    messagingSenderId: "477095516168",
    appId: "1:477095516168:web:7cf84bfd05bb9a786059bd"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;