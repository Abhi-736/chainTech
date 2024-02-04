import React, { useEffect,useState } from 'react'

const Login = () => {

    const [isSubmitted, setisSubmitted]= useState(false)

   /* useEffect=()=>{} */

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(e);
}

  return (<div className='container-fluid'>
    <header className='text-center text-xl fs-5'>Login</header>
    <form onSubmit={(e)=>handleSubmit(e)}>

    <div className="mb-3">
    <label htmlFor="exampleInputName" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp"/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>


 {/*  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div> */}
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
  )
}

export default Login