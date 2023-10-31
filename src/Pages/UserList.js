import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
import axios from 'axios'; 



const UserList = () => {
    const [users,setUsers]=useState([])
    useEffect(() => {
      //request
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>setUsers(res.data))
    .catch((error)=>console.log(error))
    }, [])
    console.log(users)
  return (
    <div>
        {users?.map(user=><UserCard user={user} key={user.id} />)}
    </div>
  )
}

export default UserList