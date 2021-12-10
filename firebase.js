import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyBhnJhz420i5rg8MlCZ0jAyRc_WGohqWFg",
  authDomain: "joy-disney.firebaseapp.com",
  projectId: "joy-disney",
  storageBucket: "joy-disney.appspot.com",
  messagingSenderId: "724828259145",
  appId: "1:724828259145:web:1d91ba170d739dc00cd098"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
