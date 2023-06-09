import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
const firebase = require("firebase");
import { firebase } from "firebase";

const firebaseConfig = {
   apiKey: "AIzaSyCMsJalWUl6wUV_FD4C44TRF8rjBgK5Nic",
   authDomain: "pravidhi-f594d.firebaseapp.com",
   projectId: "pravidhi-f594d",
   storageBucket: "pravidhi-f594d.appspot.com",
   messagingSenderId: "381566880784",
   appId: "1:381566880784:web:3fc0de71affe76c2088e95"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
const Farmers = database.collection("farmers");
const auth = getAuth();

signUp.addEventListener('click',(e) => {

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var username = document.getElementById('username').value;
  
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
       // Signed in 
        const user = userCredential.user;
  
        set(ref(database, 'users/' + user.uid),{
            username: username,
            email: email,
        })
  
        alert('user created!');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
  
        alert(errorMessage);
      // ..
      });
  
  });
  
   login.addEventListener('click',(e)=>{
     var email = document.getElementById('email').value;
     var password = document.getElementById('password').value;
  
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
  
          const dt = new Date();
           update(ref(database, 'users/' + user.uid),{
            last_login: dt,
          })
  
           alert('User loged in!');
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
  
          alert(errorMessage);
    });
  
   });
  
  const user = auth.currentUser;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      //bla bla bla
      // ...
    } else {
      // User is signed out
      // ...
      //bla bla bla
    }
  });
  
  logout.addEventListener('click',(e)=>{
  
     signOut(auth).then(() => {
       // Sign-out successful.
       alert('user loged out');
     }).catch((error) => {
       // An error happened.
       const errorCode = error.code;
       const errorMessage = error.message;
  
          alert(errorMessage);
     });
  
  });
module.exports = Farmers;
