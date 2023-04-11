// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvOfDyOUCTmBJ29f4NEAXZ01UbocwQNBA",
  authDomain: "realtor-clone-react-91ec3.firebaseapp.com",
  projectId: "realtor-clone-react-91ec3",
  storageBucket: "realtor-clone-react-91ec3.appspot.com",
  messagingSenderId: "530418826262",
  appId: "1:530418826262:web:2a029c2e9f5146017c4937"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()