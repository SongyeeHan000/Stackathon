import React from "react"
import {useState} from 'react'
import {collection, addDoc} from "firebase/firestore"

// import Routes from './Routes'

import db from './firebase'
// import { collection, addDoc } from "firebase/firestore"; 
// import Favorites from "./Components/Favorites"
// import firebase from "firebase"
// import Navbar from './components/Navbar'
// import Routes from './Routes'

export default function AddRestaurant() {
    const [name, setName] = useState("")
    const [x, setX] = useState("")
    const [y, setY] = useState("")


  const handleSubmit = async() => {
    try {
        const docRef = await addDoc(collection(db, "restaurant"), {
          name,
          x,
          y
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
  }
  return (
    <div>
        <div className="add-restaurant">
        <h1>Add Restaurant</h1>
        <form id="edit-product">
          <label htmlFor="name">Restaurant Name:</label>
          <input name="name" value={name}  />
          <label htmlFor="x">X-coordinate:</label>
          <input name="x" value={x} />
          <label htmlFor="y">Y-coordinate:</label>
          <input name="y" value={y} />
          <div className="below-item">
            <button className="add-product" type="submit" onClick={handleSubmit}>
              Submit
            </button>
            {/* <Link to="/products">
              <button className="cancel-btn" type="button">
                Cancel
              </button>
            </Link> */}
          </div>
        </form>
      </div>
    </div>
  )
}
