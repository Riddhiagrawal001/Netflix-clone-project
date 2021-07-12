import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4xtWzjpIcPP8PUn2hmr73y89ZLeG_qQI",
  authDomain: "netfix-clone-project.firebaseapp.com",
  projectId: "netfix-clone-project",
  storageBucket: "netfix-clone-project.appspot.com",
  messagingSenderId: "645120187185",
  appId: "1:645120187185:web:3e0cf739430772cf8b6e10",
  measurementId: "G-ZG5CB8G5P4",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
