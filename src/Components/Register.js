import React from "react";
import { NavLink } from 'react-router-dom';

const PostData = ()=>{

}

export default function Register() {
  return (
    <>
      <div className="container mt-5" style={{
            border: "2px solid black",
            marginTop: "10px",
            color: "black",
            width: "65%",
            backgroundColor: "aqua",
            borderRadius: "2vw"
          }}>
        <div className="row">
          <div className="col-12 col-md-4 col-sm-6">
            <h1 className="mt-3"  style={{color:"black"}}>Welcome!!!</h1>
          </div>
          <div className="col-12 col-md-5 col-sm-6">
          <form method="POST">
            <div className="form-group">
              <label htmlFor="companyName" className="form-label" style={{color:"black"}}>
                Company Name
              </label>
              <input type="text" className="form-control" id="companyName" />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label" style={{color:"black"}}>
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="form-label" style={{color:"black"}}>
                Phone Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label" style={{color:"black"}}>
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="cpassword" className="form-label" style={{color:"black"}}>
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="cpassword"
              />
            </div>
            <NavLink to='/login' className="mb-5">Already Registered, then Login here!</NavLink><br /><br />
            <button type="submit" className="btn btn-primary mb-3" id='register' name='register' onClick={PostData}>Register</button>
          </form>       
          </div>
        </div>
      </div>
    </>
  );
}
