// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCnFqCJbsdC2SrNHa1PFdy6s-hBs3Y_ZtI",
	authDomain: "react-cursos-c166a.firebaseapp.com",
	projectId: "react-cursos-c166a",
	storageBucket: "react-cursos-c166a.appspot.com",
	messagingSenderId: "426020428342",
	appId: "1:426020428342:web:9b12ce6575bb1e63649697",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
