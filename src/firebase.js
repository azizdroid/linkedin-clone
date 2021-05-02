import firebase from "firebase";

const firebaseConfig = {
  // apiKey: "AIzaSyCoom_sdJ9IwySIHvunGp69ZMvTxjTH2AA",
  // authDomain: "nykaa-clone.firebaseapp.com",
  // databaseURL: "https://nykaa-clone.firebaseio.com",
  // projectId: "nykaa-clone",
  // storageBucket: "nykaa-clone.appspot.com",
  // messagingSenderId: "458010162521",
  // appId: "1:458010162521:web:e24007c01edb384d10c848",
  // measurementId: "G-FSKH89CK2G",
  apiKey: "AIzaSyB2obhAdUfZ8mo88bz7T9FJBE7zhB0Q-18",
  authDomain: "weather-nrejyx.firebaseapp.com",
  databaseURL: "https://weather-nrejyx.firebaseio.com",
  projectId: "weather-nrejyx",
  storageBucket: "weather-nrejyx.appspot.com",
  messagingSenderId: "149354229217",
  appId: "1:149354229217:web:ddd7a18554d5e7fb7b76a0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
