import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBTDW5yRgtJw9MMl-xt8WVxQpJ5DxTYM68",
    authDomain: "slack-clone-personal.firebaseapp.com",
    projectId: "slack-clone-personal",
    storageBucket: "slack-clone-personal.appspot.com",
    messagingSenderId: "861374579048",
    appId: "1:861374579048:web:10d014982e6413ec6d56dd",
    measurementId: "G-N1BPHXJWVQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
// How to connect Firebase to React project
