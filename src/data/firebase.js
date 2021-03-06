import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  setDoc,
  doc,
  getDoc,
  getDocsFromServer,
} from "firebase/firestore";
import { Alert } from "react-native";

const firebaseConfig = {
  apiKey: "AIzaSyApbMMayz04SMlrUbmbyQLI0M28rGW7OZ4",
  authDomain: "and-one-3e31a.firebaseapp.com",
  projectId: "and-one-3e31a",
  storageBucket: "and-one-3e31a.appspot.com",
  messagingSenderId: "190343825238",
  appId: "1:190343825238:web:8f116c4926cdf65d3bf8f7",
  measurementId: "G-DNJBJXZMRM",
};

initializeApp(firebaseConfig);

const auth = getAuth();

const db = getFirestore();

// login function by firebase
export const login = async (email, password) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
};

// signin function by firebase
export const signup = async (email, password, name) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  await setDoc(doc(db, "user-info", email), {
    email: email,
    password: password,
    name: name,
  });

  return user;
};

// Read login data
export const readLoginInfo = async (email) => {
  const docRef = doc(db, "user-info", email);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();
  return data;
};
