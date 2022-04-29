import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMB5rlFJC5hcmjeShduzdeMNO0EhccToc",
  authDomain: "stackaton0427.firebaseapp.com",
  projectId: "stackaton0427",
  storageBucket: "stackaton0427.appspot.com",
  messagingSenderId: "207950228388",
  appId: "1:207950228388:web:bbca361568028a1da16f31",
  measurementId: "G-P3E1S7P0PX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db