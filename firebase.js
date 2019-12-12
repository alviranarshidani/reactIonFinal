//import firebase from 'firebase';

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/7.5.2/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>

import firebase from 'firebase'

//<!-- The core Firebase JS SDK is always required and must be listed first -->

  
  let firebaseConfig = {
    apiKey: "AIzaSyAe61CvmPql98fhp6pus2xDbrI4osGJVTE",
    authDomain: "reactionmaster-511dd.firebaseapp.com",
    databaseURL: "https://reactionmaster-511dd.firebaseio.com",
    projectId: "reactionmaster-511dd",
    storageBucket: "reactionmaster-511dd.appspot.com",
    messagingSenderId: "407817348263",
    appId: "1:407817348263:web:fd67c27e8dc75e32226782"
  };
  
  let app = firebase.initializeApp(firebaseConfig);

  export default firebase;
export const db = app.database();
export const auth = app.auth();

