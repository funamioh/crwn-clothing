import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmqkEm7wpA5TNwxiode9b5zwu71xI7Pfg",
  authDomain: "crwn-clothing-db-d054a.firebaseapp.com",
  projectId: "crwn-clothing-db-d054a",
  storageBucket: "crwn-clothing-db-d054a.appspot.com",
  messagingSenderId: "932033308543",
  appId: "1:932033308543:web:c68335aadba8f55ceddc4a",
  measurementId: "G-9D9QJM6GG4",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', 'NikeAirMax') 
}
