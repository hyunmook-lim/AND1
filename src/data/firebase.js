import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyApbMMayz04SMlrUbmbyQLI0M28rGW7OZ4",
  authDomain: "and-one-3e31a.firebaseapp.com",
  projectId: "and-one-3e31a",
  storageBucket: "and-one-3e31a.appspot.com",
  messagingSenderId: "190343825238",
  appId: "1:190343825238:web:8f116c4926cdf65d3bf8f7",
  measurementId: "G-DNJBJXZMRM",
};

const app = firebase.initializeApp(firebaseConfig);

const Auth = app.auth();

export const login = async ({ email, password }) => {
  const { user } = await Auth.signInWithEmailAndPassword(email, password);
  return user;
};
