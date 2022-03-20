// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCynwxqWBzoUAiZCl0YLx6_YBq0-kz6Ac",
  authDomain: "reactjs-firebase-authenticate.firebaseapp.com",
  projectId: "reactjs-firebase-authenticate",
  storageBucket: "reactjs-firebase-authenticate.appspot.com",
  messagingSenderId: "67697582507",
  appId: "1:67697582507:web:ba9e62a01c72e7c27e72ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Require this app to have authentication
export const auth = getAuth(app);