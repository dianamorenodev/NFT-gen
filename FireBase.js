// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeUf-_nMgwPILfCtI_n4q8hTXvAayWSOI",
  authDomain: "nft-gen-c4d76.firebaseapp.com",
  databaseURL: "https://nft-gen-c4d76-default-rtdb.firebaseio.com",
  projectId: "nft-gen-c4d76",
  storageBucket: "nft-gen-c4d76.appspot.com",
  messagingSenderId: "331260548866",
  appId: "1:331260548866:web:3128a50570d52df322541b",
  measurementId: "G-TSBKJR4FT9"
};


// Initialize Firebaseconst firebaseApp = getApp();
firebase.initializeApp(firebaseConfig);
// Get a reference to the storage service, which is used to create references in your storage bucket
const storage=firebase.storage();
export {storage}