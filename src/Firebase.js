// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMdrvkz_gyMNPPsBzO00G0-CKTacf5hOo",
  authDomain: "toolsmaster-cec06.firebaseapp.com",
  projectId: "toolsmaster-cec06",
  storageBucket: "toolsmaster-cec06.appspot.com",
  messagingSenderId: "170498735335",
  appId: "1:170498735335:web:f5fa4c59a7f5f4e8d47642",
  measurementId: "G-X9RM69DM1D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default analytics