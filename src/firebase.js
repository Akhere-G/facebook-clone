import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAxK2KnjRE31tvzavwpQpUlF6WtWmdYKR8",
  authDomain: "facebook-clone-10994.firebaseapp.com",
  databaseURL: "https://facebook-clone-10994.firebaseio.com",
  projectId: "facebook-clone-10994",
  storageBucket: "facebook-clone-10994.appspot.com",
  messagingSenderId: "959914337141",
  appId: "1:959914337141:web:039dad2319ec33a219293c",
  measurementId: "G-YBBXLEV0S2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
