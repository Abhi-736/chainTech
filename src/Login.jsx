import React, { useEffect,useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

const Login = () => {
const [storeData,setstoreData]= useState(JSON.parse(localStorage.getItem('userData')) || null);
    const [name, setName]= useState('');
    const [email,setEmail]= useState('');
    const [password, setPassword]=useState('')
    const navigate= useNavigate();
    const [wrongDetails, setwrongDetails]= useState(false)

   /* useEffect=()=>{} */

const handleSubmit=(e)=>{
    e.preventDefault();
    const isUserPresent= storeData&&storeData.find((userObject)=>userObject.name==name&&userObject.email===email&& userObject.password===password);
    isUserPresent?(navigate('/User',{state:{}})):(setwrongDetails(true))
}

  return (<div className='container-fluid'>
    <header className='text-center text-xl fs-5'>Login</header>
    <form onSubmit={(e)=>handleSubmit(e)}>

    <div className="mb-3">
    <label htmlFor="exampleInputName" className="form-label">Name</label>
    <input type="text" className="form-control" value={name} onChange={(e)=>{setName(e.target.value)}}
     id="exampleInputName" aria-describedby="emailHelp"/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}}
     id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" value={password} onChange={(e)=>{setPassword(e.target.value)}}
     id="exampleInputPassword1"/>
  </div>

<div className={`${wrongDetails && 'none'}`}>Sorry the Details entered are incorrect. New users are requested to register first.</div>
 <div className='container-fluid d-flex '>
 <button type="submit" className="btn btn-primary">Submit</button>
 <button className="btn btn-secondary" ><Link to="/Registration">Register</Link></button>
  </div>
</form>
</div>
  )
}

export default Login