import React, { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';


const User = () => {

const [userObjects, setUserObjects] = useState(JSON.parse(localStorage.getItem('userData')))
    const [formData, setformData] = useState({
        name: "",
        email: "",
        number: "",
        password: "",
        age: "",
        gender: "Male",
      });

const location= useLocation();
const selectedUser = location.state[0]
console.log(location.state[0])

const handleChange=(e)=>{
   setformData((obj)=>({...obj,[e.target.id]: e.target.value}))
}
const handleSubmit=()=>{
const updatedUserObject =userObjects.map((object)=>{if(selectedUser.name==object.name && selectedUser.password==object.password)
return {...object, ...formData}
})


}



  return (
    <div> <form onSubmit={(e) => handleSubmit(e)}>
    <div className="mb-3">
      <label htmlFor="exampleInputName" className="form-label">
        Name
      </label>
      <input
        type="text"
        className="form-control"
        id="name"
        required value={formData.name}
        onChange={(e)=>{handleChange(e)}}
      />
    </div>

    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
        Email address
      </label>
      <input
        type="email"
        className="form-control"
        id="email"
        aria-describedby="emailHelp"
        required value={formData.email}
        onChange={(e)=>{handleChange(e)}}

      />
      <div id="emailHelp" className="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>

    <div className="mb-3">
      <label htmlFor="exampleInputNumber" className="form-label">
        Phone Number
      </label>
      <input
        type="number"
        className="form-control"
        id="number"
        required value={formData.number}
        onChange={(e)=>{handleChange(e)}}
      />
      <div id="emailHelp" className="form-text">
        We'll never share your phone number with anyone else.
      </div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">
        Password
      </label>
      <input
        type="password"
        className="form-control"
        id="password"
        required value={formData.password}
        onChange={(e)=>{handleChange(e)}}
      />
    </div>

    <div className="mb-3">
      <label htmlFor="exampleInputAge" className="form-label">
        Age
      </label>
      <input
        type="number"
        className="form-control"
        id="age"
        required value={formData.age}
        onChange={(e)=>{handleChange(e)}}
      />
    </div>

    <select
      className="form-select mb-3"
      aria-label="Default select example"
      id="gender" value={formData.gender}
      onChange={(e)=>{handleChange(e)}}
    >
      <option defaultValue>Gender</option>
      <option value="1">Male</option>
      <option value="2">Female</option>
    </select>

   {/*  {isSubmit && <small>Thank you for submission, now you can <Link to={'/'}>Login</Link> </small>} */}

    <button type="submit" className="btn btn-primary">
      Submit
    </button>
   {/*  {isSubmit && (
      <button onClick={() => navigate("/",)} className="btn btn-secondary">
        Login
      </button>
    )} */}
  </form></div>
  )
}

export default User