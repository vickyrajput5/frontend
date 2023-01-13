import React, { useState } from "react";
import '../App.css'

const Registration = () =>{

    const [user, setUser] = useState({
        fullname:"", email:"", password:"", cpassword:"", phone:"", work:"", address:""
    })
    let name, value;
    const  inputhandler = (e) =>{
        name = e.target.name;
        value = e.target.value;
        setUser({...user, [name]:value });
    }
   const postData = async (e)=>{
       e.preventDefault()
       const { fullname, email, password, cpassword, phone, work, address} = user

   }

    return(
        <>
      <div className="form-registration">
         
      <form className="row g-3" method="POST">
      <h1>Registration</h1>
        <div className="col-md-6">
          <label htmlFor="fullname" className="form-label">Full Name</label>
          <input type="text" className="form-control"  onChange={inputhandler} id="fullname" name="fullname" value={user.fullname}/>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputemail" className="form-label">Email</label>
          <input type="email"  className="form-control"  onChange={inputhandler} id="inputemail" name="email" value={user.email}  placeholder="admin@gmail.com"/>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">Password</label>
          <input type="password" className="form-control"  onChange={inputhandler} name="password" value={user.password} id="inputPassword4" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">Confirm Password</label>
          <input type="password" className="form-control"  onChange={inputhandler} id="inputPassword4" value={user.cpassword} name="cpassword" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">Phone</label>
          <input type="text" className="form-control"  onChange={inputhandler} id="inputCity" value={user.phone} name="phone" placeholder="030-2345-213" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputwork" className="form-label">Work</label>
          <input type="text" className="form-control"  onChange={inputhandler} id="inputwork" value={user.work} name="work" />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">Address</label>
          <input type="text" name="address" className="form-control" value={user.address} onChange={inputhandler} id="inputAddress" placeholder="1234 Main St" />
        </div>
       
        
        <div className="col-12">
          <button type="submit" className="btn btn-primary" onClick={postData}>Sign in</button>
        </div>
      </form>
      </div>
        </>
    )
}

export default Registration;