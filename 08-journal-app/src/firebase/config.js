/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getEnvironments } from "../helpers";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//console.log(import.meta.env)
//console.log(process.env);
const {
	VITE_APIKEY,
	VITE_AUTHDOMAIN,
	VITE_DATABASEURL,
	VITE_PROJECTID,
	VITE_STORAGEBUCKET,
	VITE_MESSAGINGSENDERID,
	VITE_APPID,
} = getEnvironments();

//console.log(env);

// Your web app's Firebase configuration
// Dev/Prod
// const firebaseConfig = {
// 	apiKey: "AIzaSyCnFqCJbsdC2SrNHa1PFdy6s-hBs3Y_ZtI",
// 	authDomain: "react-cursos-c166a.firebaseapp.com",
// 	projectId: "react-cursos-c166a",
// 	storageBucket: "react-cursos-c166a.appspot.com",
// 	messagingSenderId: "426020428342",
// 	appId: "1:426020428342:web:9b12ce6575bb1e63649697",
// };

// Dev/Dev
const firebaseConfig = {
	apiKey: VITE_APIKEY,
	authDomain: VITE_AUTHDOMAIN,
	databaseURL: VITE_DATABASEURL,
	projectId: VITE_PROJECTID,
	storageBucket: VITE_STORAGEBUCKET,
	messagingSenderId: VITE_MESSAGINGSENDERID,
	appId: VITE_APPID,
};

//console.log(firebaseConfig);

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
