import React, { useEffect,useState } from 'react'

const User = () => {

    const [userData, setuserData] =useState(JSON.parse(localStorage.getItem('userData')))

console.log(userData)
  return (
    <div>hello</div>
  )
}

export default User