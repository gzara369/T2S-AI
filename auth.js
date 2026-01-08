import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD4swvZ26NeHL_IKcoSL3OkiRTp-Nv6G_I",
  authDomain: "t2s-tool.firebaseapp.com",
  projectId: "t2s-tool",
  storageBucket: "t2s-tool.firebasestorage.app",
  messagingSenderId: "700665192768",
  appId: "1:700665192768:web:20958c344e1bd548e05aa5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

window.googleLogin = function(){
  signInWithPopup(auth, provider)
    .then(() => {
      location.href = "dashboard.html";
    })
    .catch(e => alert(e.message));
};

onAuthStateChanged(auth, user => {
  if(user && location.pathname.includes("index")){
    location.href = "dashboard.html";
  }
});

window.logout = function(){
  signOut(auth).then(()=>{
    location.href = "index.html";
  });
};