import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDH5BclDnRrnvE1JBfUwKz00b-SocM8ksI",
  authDomain: "blue-d8d04.firebaseapp.com",
  databaseURL: "https://blue-d8d04.firebaseio.com",
  storageBucket: "blue-d8d04.appspot.com",
  messagingSenderId: "426528791210"
};

firebase.initializeApp(config);

export const rootRef = firebase.database().ref('teams');
export const swimmerRef = firebase.database().ref('teams/0/team/athletes');
export const provider = new firebase.auth.GoogleAuthProvider();
export default firebase;
