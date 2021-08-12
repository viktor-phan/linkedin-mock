// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA_tFjHXVBIj9llAnyLOt0Yz1yoY-d8IFQ",
  authDomain: "my-linkedin-project-e7de2.firebaseapp.com",
  projectId: "my-linkedin-project-e7de2",
  storageBucket: "my-linkedin-project-e7de2.appspot.com",
  messagingSenderId: "179108111241",
  appId: "1:179108111241:web:6f2fe3ee1a3b400609b758",
  measurementId: "G-W9SVDXNVXE",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
export { db, auth };
