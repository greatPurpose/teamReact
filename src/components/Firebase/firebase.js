import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDepb7GYtXfJI_Y_wY19JdZUZjQUq2jOcM",
  authDomain: "testreact-1b67a.firebaseapp.com",
  projectId: "testreact-1b67a",
  storageBucket: "testreact-1b67a.appspot.com",
  messagingSenderId: "1008317364132",
  appId: "1:1008317364132:web:46ee507d0df6127ee07331",
  measurementId: "G-XZVKBPGVCD"
  };


class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.database();
  }

  doCreateUserWithEmailAndPassword = ( email, password) => 
    this.auth.createUserWithEmailAndPassword(email, password);
      
  doSignInWithEmailAndPassword = (email, password) => 
    this.auth.signInWithEmailAndPassword(email, password);
    
  doSignOut = () => this.auth.signOut();
  doPasswordReset = email => this.auth.sendPasswordResetEmail(email); 
  doPasswordUpdate = password =>this.auth.currentUser.updatePassword(password);
    

    user = uid => this.db.ref(`users/${uid}`); 
    users = () => this.db.ref('users');
    currentuser = () => this.db.ref(`users/${this.auth.currentUser.uid}`);
    currentuserkey = () => this.auth.currentUser.uid;

    card = cid => this.db.ref(`cards/${cid}`);
    cards = () => this.db.ref('cards');


}

export default Firebase;