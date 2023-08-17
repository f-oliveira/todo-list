// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6mus5dbiQCwi1c4bOCnIy2xqIiaLdVMU",
  authDomain: "task-list-7059c.firebaseapp.com",
  projectId: "task-list-7059c",
  storageBucket: "task-list-7059c.appspot.com",
  messagingSenderId: "539897103384",
  appId: "1:539897103384:web:38d58d3174545b170f6f6d"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFireStore(firebaseApp);

export { db };