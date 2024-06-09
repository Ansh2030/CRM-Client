// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8gn9-SElSHbRbIiQYdoF30wiFxK_BBO8",
  authDomain: "mini-crm-23360.firebaseapp.com",
  projectId: "mini-crm-23360",
  storageBucket: "mini-crm-23360.appspot.com",
  messagingSenderId: "865071140144",
  appId: "1:865071140144:web:5ce34cbb10c13388750cf5",
  measurementId: "G-WZ33ML1T97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// const analytics = getAnalytics(app);

export{app, auth};