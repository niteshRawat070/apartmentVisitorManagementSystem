import firebase from 'firebase'

var firebaseConfig = {
//     use your own firebase data here
  };
  const fire=firebase.initializeApp(firebaseConfig);
  // export const db=firebase.firestore();
  export default fire;
