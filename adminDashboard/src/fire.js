import firebase from 'firebase'; 
import SECRET from './secret.js'; 

  var config = {
    apiKey: SECRET.FIREBASE_KEY,
    authDomain: "fitnesschallenge-26de6.firebaseapp.com",
    databaseURL: "https://fitnesschallenge-26de6.firebaseio.com",
    projectId: "fitnesschallenge-26de6",
    storageBucket: "fitnesschallenge-26de6.appspot.com",
    messagingSenderId: "706151436086"
  };

  const fire = firebase.initializeApp(config);
  export default fire; 