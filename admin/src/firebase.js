import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDTEBg-hyJWK0hMlfeyk4ryVYlXZvS3qAE",
    authDomain: "chillax-31091.firebaseapp.com",
    projectId: "chillax-31091",
    storageBucket: "chillax-31091.appspot.com",
    messagingSenderId: "153098158473",
    appId: "1:153098158473:web:a4b4f090076bc64d216158",
    measurementId: "G-2E3M5F7GE0"
  };

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;