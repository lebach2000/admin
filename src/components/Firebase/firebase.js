import * as firebase from 'firebase';
import "firebase/storage";
import * as ROUTES from '../../constants/routes';

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyA9jLLgGd7FCfDguvxHnQg5R7SsnUZxEBg",
  authDomain: "name-de40c.firebaseapp.com",
  databaseURL: "https://name-de40c.firebaseio.com",
  projectId: "name-de40c",
  storageBucket: "name-de40c.appspot.com",
  messagingSenderId: "218464169431",
  appId: "1:218464169431:web:0488f7cc61e07f0d3eef92",
  measurementId: "G-DTM9RNMR5N"
};

const app = firebase.initializeApp(firebaseConfig);
const storage = app.storage();
console.log(app);

app.auth().onAuthStateChanged(function(users) {
  if (users) {
    // User is signed in.
    this.props.history.push(ROUTES.HOME)

  } else {
    // No user is signed in.
    this.props.history.push(ROUTES.SIGN_IN)
  }
});
export { app, storage as default };

