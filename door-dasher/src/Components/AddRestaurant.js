import React, {useState} from "react"
import { setDoc, doc} from "firebase/firestore"

// import Routes from './Routes'

import db from '../firebase'

export default function AddRestaurant() {
    let [name, setName] = useState('')
    let [x, setX] = useState('')
    let [y, setY] = useState('')

  function createId(str) {
    const splitStr = str.split(" ").join("")
    return splitStr.replace(splitStr[0], splitStr[0].toLowerCase())
  }

  const handleSubmit = async(e) => {
    try{
      e.preventDefault()
      const docRef = await setDoc(doc(db, "restaurants", createId(name)), {
        name,
        x,
        y
      });
      console.log(docRef)
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
          <input name="name" value={name} onChange={event => setName(event.target.value)} />
          <label htmlFor="x">X-coordinate:</label>
          <input name="x" value={x} onChange={event => setX(event.target.value)} />
          <label htmlFor="y">Y-coordinate:</label>
          <input name="y" value={y} onChange={event => setY(event.target.value)}/>
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
