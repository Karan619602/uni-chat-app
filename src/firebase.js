import firebase from "firebase"
import "firebase/auth"


export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCeRWLMRCMLrC__SJzrXZAyefeKkgMaBUQ",
    authDomain: "uni-chat-app-8eaab.firebaseapp.com",
    projectId: "uni-chat-app-8eaab",
    storageBucket: "uni-chat-app-8eaab.appspot.com",
    messagingSenderId: "392164026957",
    appId: "1:392164026957:web:de981d3041bc8a08f00a04"
  }).auth();
  