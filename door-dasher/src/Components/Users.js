import {useState, useEffect} from 'react'
import { collection, getDocs } from "firebase/firestore";

import db from '../firebase'

export default function UsersPage() {
  const [users, setUsers] = useState([])

  useEffect(() => {
      const updateUsers = async () => {
        setInterval(() => {
          setUsers([...users, {firstName: `Bob ${users.length + 1}`}])
        }, 2000) 
      }

      updateUsers()
  })

  useEffect(() => {
    const fetchUsers = async () => {
      const usersSnapshot= await getDocs(collection(db, "users"));
      const fetchedUsers = []
      usersSnapshot.forEach((user) => {
        fetchedUsers.push(user.data())
      })
      // querySnapshot.forEach((doc) => {
      //   console.log(`${doc.id} => ${doc.data()}`);
      // });
      setUsers(fetchedUsers)
    }

    fetchUsers()
  })

  return (
    <div>
      Users:
      <div>
        {users.map((user) => {
          return (<div key={user.first}> {user.first} </div>)
        })}
      </div>
    </div>
  )
}