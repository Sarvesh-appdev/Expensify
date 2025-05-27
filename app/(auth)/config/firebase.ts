// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgoEElUx755wDgCg1lD6-Esw4BweAQIfg",
  authDomain: "expensify-534e5.firebaseapp.com",
  projectId: "expensify-534e5",
  storageBucket: "expensify-534e5.firebasestorage.app",
  messagingSenderId: "596374080641",
  appId: "1:596374080641:web:57aa16c493f5f20f5d9180"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth 
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});

// db 
export const firestore = getFirestore(app);