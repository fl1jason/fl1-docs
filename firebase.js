import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCwuWR2hyJdmqmRZ-A2KKKMk_uqUENuFO8",
    authDomain: "fl1-docs.firebaseapp.com",
    projectId: "fl1-docs",
    storageBucket: "fl1-docs.appspot.com",
    messagingSenderId: "876280391414",
    appId: "1:876280391414:web:50ae6b3d2373cd5a426ed7",
    measurementId: "G-8ZDQMY80NY"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

export { db };
