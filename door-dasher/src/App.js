import React from 'react'

import Routes from './Routes'

import db from './firebase'
import { collection, addDoc } from "firebase/firestore"; 
// import Favorites from "./Components/Favorites"
// import firebase from "firebase"

export default function App() {
  return (
    <div>
      <Routes />
    </div>
  )
}
