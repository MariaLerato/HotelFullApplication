// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQDt-voHlry5yF5sa3xadTvS5Hhd07jHw",
  authDomain: "hotel-app-88921.firebaseapp.com",
  projectId: "hotel-app-88921",
  storageBucket: "hotel-app-88921.appspot.com",
  messagingSenderId: "48914044351",
  appId: "1:48914044351:web:4c07726ca1879870943d0a",
  measurementId: "G-DDQG7195YN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);