// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDy38e-SRVfMz1y6LkQrMugsOyy0qQt-0g",
    authDomain: "travel-guru-32422.firebaseapp.com",
    projectId: "travel-guru-32422",
    storageBucket: "travel-guru-32422.appspot.com",
    messagingSenderId: "150679343380",
    appId: "1:150679343380:web:cedb73d0a0e10b26cff201",
    measurementId: "G-JSNS3J7W12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;