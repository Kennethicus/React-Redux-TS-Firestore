// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoNS1DxpmfLu2DNXBzocGIgMPYLgKs5Ek",
  authDomain: "list-app-610bf.firebaseapp.com",
  projectId: "list-app-610bf",
  storageBucket: "list-app-610bf.appspot.com",
  messagingSenderId: "484978691254",
  appId: "1:484978691254:web:87ae21879e84d532ddea17",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
