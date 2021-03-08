import firebase from 'firebase/app';
import 'firebase/analytics'

const firebaseConfig = {
  apiKey: "AIzaSyCXE9BCXNMTJteL0n7rPaM9-DFIlsR4JuI",
  authDomain: "search-engine-295f5.firebaseapp.com",
  projectId: "search-engine-295f5",
  storageBucket: "search-engine-295f5.appspot.com",
  messagingSenderId: "29177810796",
  appId: "1:29177810796:web:f308cc785511282c1a6d49",
  measurementId: "G-X94LXFTPBS"
};
try {
  firebase.initializeApp(firebaseConfig);
} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}

const fire = firebase;
export default fire;