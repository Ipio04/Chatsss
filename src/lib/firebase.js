// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: import.meta.env.VITE_API_KEY,

  authDomain: "chat-1d710.firebaseapp.com",

  projectId: "chat-1d710",

  storageBucket: "chat-1d710.appspot.com",

  messagingSenderId: "1023933504218",

  appId: "1:1023933504218:web:945b927d841739107423e3"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
