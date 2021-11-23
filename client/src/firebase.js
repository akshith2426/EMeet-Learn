import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

//STORED THE FIREBASE DETAILS IN .env.local FILE

const firebaseConfig = {
    apiKey: "AIzaSyBc5paCWAvFFZSg25xx7NbRjuSVUyqgS_c",
    authDomain: "netflix-clone-react-6299d.firebaseapp.com",
    projectId: "netflix-clone-react-6299d",
    storageBucket: "netflix-clone-react-6299d.appspot.com",
    messagingSenderId: "673064399023",
    appId: "1:673064399023:web:92695add3b5c81c7ed245a"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;