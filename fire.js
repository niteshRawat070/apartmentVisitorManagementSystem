import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDtAjfmFQs5gaNjmgXNIlFiFexwR6xyxRI",
    authDomain: "auth-33e80.firebaseapp.com",
    projectId: "auth-33e80",
    storageBucket: "auth-33e80.appspot.com",
    messagingSenderId: "1006123544566",
    appId: "1:1006123544566:web:156c5cf6e3abb0f24421d7"
  };
  const fire=firebase.initializeApp(firebaseConfig);
  // export const db=firebase.firestore();
  export default fire;