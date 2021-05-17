import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyAfJJ-nzoAuMNENHNx7MkN2BHm20iVibOU",
    authDomain: "crwn-db-b6cbc.firebaseapp.com",
    projectId: "crwn-db-b6cbc",
    storageBucket: "crwn-db-b6cbc.appspot.com",
    messagingSenderId: "342352413718",
    appId: "1:342352413718:web:892b5f242125cef2e5e137"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: "select_account"});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;