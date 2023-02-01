// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBBsMnLIoZucqONt3xiOGXOcKbSFTSYZSs",
    authDomain: "news-feed-auth.firebaseapp.com",
    projectId: "news-feed-auth",
    storageBucket: "news-feed-auth.appspot.com",
    messagingSenderId: "928933817876",
    appId: "1:928933817876:web:cf33dee1bfa45fbe2e4101",
    measurementId: "G-Q50C5KDX7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app; 