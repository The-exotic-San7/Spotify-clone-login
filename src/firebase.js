import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAbimS2oK_tStVaCsUVDp7-yer9myDL74I",
    authDomain: "spotify-dev-85f8d.firebaseapp.com",
    projectId: "spotify-dev-85f8d",
    storageBucket: "spotify-dev-85f8d.appspot.com",
    messagingSenderId: "891261573898",
    appId: "1:891261573898:web:5cf0b639819fa5a18478f3"
  };

  firebase.initializeApp(firebaseConfig)
  export default firebase;
  