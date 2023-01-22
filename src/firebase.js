// import { initializeApp } from "firebase/app"
// import { getFirestore } from 'firebase/firestore'

// const firebaseConfig = {
//   apiKey: "AIzaSyD5Kj7NU256TKVncdOCy_TELSmdRrEAH4c",
//   authDomain: "task-manager-1e712.firebaseapp.com",
//   projectId: "task-manager-1e712",
//   storageBucket: "task-manager-1e712.appspot.com",
//   messagingSenderId: "935257286219",
//   appId: "1:935257286219:web:d88cfe3837e8e9a4e2cfce"
// };

// // Initialize Firebase and Firestore
// const app = initializeApp(firebaseConfig)
// const db = getFirestore(app)


// Import the functions you need from the SDKs you need



import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrOYrNHyz7HAU7CiGOOUjgKZEQ_LiM1cY",
  authDomain: "todo-5b949.firebaseapp.com",
  projectId: "todo-5b949",
  storageBucket: "todo-5b949.appspot.com",
  messagingSenderId: "827319679681",
  appId: "1:827319679681:web:ad5979683a1af9eaa83240",
  measurementId: "G-83F61T08RT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db =getFirestore(app);
export {db};