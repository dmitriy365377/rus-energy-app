import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyBnU24N3nDSKOb590epRbw8q_6gqDUCB8s",
    authDomain: "fir-react-auth-4915c.firebaseapp.com",
    databaseURL: "https://fir-react-auth-4915c.firebaseio.com",
    projectId: "fir-react-auth-4915c",
    storageBucket: "fir-react-auth-4915c.appspot.com",
    messagingSenderId: "237490043936",
    appId: "1:237490043936:web:bb5322e9e45cb9575f5045"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export default firebase