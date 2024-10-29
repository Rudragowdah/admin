import React from 'react'
import { NavLink } from 'react-router-dom';

const PostData = () =>{

}

export default function Login() {
  return (
    <>
    <div className="container mt-5" style={{
            border: "2px solid black",
            marginTop: "10px",
            color: "black",
            width: "45%",
            backgroundColor: "aqua",
            borderRadius: "2vw"
          }}>
        <div className="row">
          <div className="col col-sm-6 offset-md-3 offset-sm-1 ">
          <form method="POST">
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
              <label htmlFor="password" className="form-label" style={{color:"black"}}>
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
              />
            </div>
            <NavLink to='/register' className="mb-5">Didn't Registered, then Register here!</NavLink><br /><br />
            <button type="submit" className="btn btn-primary mb-3" id='login' name='login' onClick={PostData}>Login</button>
          </form>       
          </div>
        </div>
      </div>
    </>
  )
}
