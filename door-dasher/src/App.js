import React from 'react'

import Routes from './Routes'

import db from './firebase'
import { collection, addDoc } from "firebase/firestore"; 
// import Favorites from "./Components/Favorites"
// import firebase from "firebase"
// import Navbar from './components/Navbar'
// import Routes from './Routes'

export default function App() {
  // foo()
  // return (
  //   <div>
  //     Hello
  //     {/* <h1>React & Firebase</h1>
  //     <h2>By @farazamiruddin</h2> */}
  //     {/* <code>
  //       <pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre>
  //     </code> */}
  //   </div>
  // );
  return (
    <div>
      <Routes />
    </div>
  )
}
