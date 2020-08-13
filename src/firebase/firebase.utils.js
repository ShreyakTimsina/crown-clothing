import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBYpnOi5KlwdvvorYPQm1v_lfj2xcrWsAU",
  authDomain: "crown-clothing-854a8.firebaseapp.com",
  databaseURL: "https://crown-clothing-854a8.firebaseio.com",
  projectId: "crown-clothing-854a8",
  storageBucket: "crown-clothing-854a8.appspot.com",
  messagingSenderId: "350347712941",
  appId: "1:350347712941:web:f15b65279c15dc4b492924",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
