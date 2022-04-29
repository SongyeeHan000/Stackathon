import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-cd30at3tViAam5eNEwka-DatWMs-5nM",
  authDomain: "stackathon-262c1.firebaseapp.com",
  projectId: "stackathon-262c1",
  storageBucket: "stackathon-262c1.appspot.com",
  messagingSenderId: "691826557713",
  appId: "1:691826557713:web:24b2624c74cede934e42b0",
  measurementId: "G-XG6C47PNBE"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db