// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyAX3-m4D6a57zaXrwciWurKhjxFBdjl0tc",
  authDomain: "ninja-subs.firebaseapp.com",
  databaseURL: "https://ninja-subs.firebaseio.com",
  projectId: "ninja-subs",
  storageBucket: "ninja-subs.appspot.com",
  messagingSenderId: "185936356689",
  appId: "1:185936356689:web:266c9a8072b4daa9319f70",
  measurementId: "G-EM1NXS0SEZ"
};

export const FieldValue = app.firestore.FieldValue;
export const firebase = app;

export default app.initializeApp(config);
