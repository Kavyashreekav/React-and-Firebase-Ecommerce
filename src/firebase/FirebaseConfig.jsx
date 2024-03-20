// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1I4XDBv4iAU9_13rVORemSrcfzcMm6K4",
  authDomain: "myecom-15591.firebaseapp.com",
  projectId: "myecom-15591",
  storageBucket: "myecom-15591.appspot.com",
  messagingSenderId: "18881424025",
  appId: "1:18881424025:web:f141f7f9f65a599a442608"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app)
const auth = getAuth(app)

export { auth, fireDB}