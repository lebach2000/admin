// import * as firebase from 'firebase';
// import "firebase/storage";
// import * as ROUTES from '../../constants/routes';
//
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA9jLLgGd7FCfDguvxHnQg5R7SsnUZxEBg",
//   authDomain: "name-de40c.firebaseapp.com",
//   databaseURL: "https://name-de40c.firebaseio.com",
//   projectId: "name-de40c",
//   storageBucket: "name-de40c.appspot.com",
//   messagingSenderId: "218464169431",
//   appId: "1:218464169431:web:0488f7cc61e07f0d3eef92",
//   measurementId: "G-DTM9RNMR5N"
// };
//
// const app = firebase.initializeApp(firebaseConfig);
// const storage = app.storage();
// console.log(app);
//
// app.auth().onAuthStateChanged(function(users) {
//   if (users) {
//     // User is signed in.
//     this.props.history.push(ROUTES.HOME)
//
//   } else {
//     // No user is signed in.
//     this.props.history.push(ROUTES.SIGN_IN)
//   }
// });
// export { app, storage as default };
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyA9jLLgGd7FCfDguvxHnQg5R7SsnUZxEBg",
  authDomain: "name-de40c.firebaseapp.com",
  databaseURL: "https://name-de40c.firebaseio.com",
  projectId: "name-de40c",
  storageBucket: "name-de40c.appspot.com",
  messagingSenderId: "218464169431",
  appId: "1:218464169431:web:0488f7cc61e07f0d3eef92",
  measurementId: "G-DTM9RNMR5N"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    /* Helper */

    this.fieldValue = app.firestore.FieldValue;
    this.emailAuthProvider = app.auth.EmailAuthProvider;

    /* Firebase APIs */

    this.auth = app.auth();
    this.db = app.firestore();

    /* Social Sign In Method Provider */

    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.facebookProvider = new app.auth.FacebookAuthProvider();
    this.twitterProvider = new app.auth.TwitterAuthProvider();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignInWithGoogle = () =>
    this.auth.signInWithPopup(this.googleProvider);

  doSignInWithFacebook = () =>
    this.auth.signInWithPopup(this.facebookProvider);

  doSignInWithTwitter = () =>
    this.auth.signInWithPopup(this.twitterProvider);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doSendEmailVerification = () =>
    this.auth.currentUser.sendEmailVerification({
      url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
    });

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // *** Merge Auth and DB User API *** //

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.user(authUser.uid)
          .get()
          .then(snapshot => {
            const dbUser = snapshot.data();

            // default empty roles
            if (!dbUser.roles) {
              dbUser.roles = {};
            }

            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
              providerData: authUser.providerData,
              ...dbUser,
            };

            next(authUser);
          });
      } else {
        fallback();
      }
    });

  // *** User API ***

  user = uid => this.db.doc(`users/${uid}`);

  users = () => this.db.collection('users');

  // *** Message API ***

  message = uid => this.db.doc(`messages/${uid}`);

  messages = () => this.db.collection('messages');

  test = uid => this.db.doc(`tests/${uid}`);

  tests = () => this.db.collection('tests');
}

export default Firebase;
