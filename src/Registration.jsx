import React from 'react'

const Registration = () => {

const handleSubmit=(e)=>{
e.preventDefault();


}


  return (
    <div className='container-fluid'>
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
    <label htmlFor="exampleInputNumber" className="form-label">Phone Number</label>
    <input type="number" className="form-control" id="exampleInputNumber" />
    <div id="emailHelp" className="form-text">We'll never share your phone number with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputAge" className="form-label">Age</label>
    <input type="number" className="form-control" id="exampleInputAge"/>
  </div>


  <select className="form-select mb-3" aria-label="Default select example">
  <option selected>Gender</option>
  <option value="1">Male</option>
  <option value="2">Female</option>
</select>

 {/*  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div> */}
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
  )
}

export default Registration