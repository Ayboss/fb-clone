import firebase from 'firebase';

const firebaseConfig = {
   apiKey: "AIzaSyA6oZj1xIEk7GE78fZKS3cRmwG-s29rOJI",
   authDomain: "fb-clone-b4ff0.firebaseapp.com",
   databaseURL: "https://fb-clone-b4ff0.firebaseio.com",
   projectId: "fb-clone-b4ff0",
   storageBucket: "fb-clone-b4ff0.appspot.com",
   messagingSenderId: "695139060683",
   appId: "1:695139060683:web:0d7c1fabd79e83d37cc44e",
   measurementId: "G-KY167EBMJL"
 };

 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();
 const auth = firebase.auth();
 const provider = new firebase.auth.GoogleAuthProvider();

 export {auth, provider};
 export default db;
