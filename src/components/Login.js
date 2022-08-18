import React from "react";
import { Link } from "react-router-dom";
import loginImg from "./images/login.jpg";

export default function Login() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <img className="login-img" src={loginImg} alt="not available" />
          </div>
          <div className="form-wrapper col-sm justify-content-center">
            <form className="login-form">
              
              <h1 className="text-center ">SIGN IN</h1>
              
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <br/>
              <button type="submit" className="btn btn-primary">
                LOGIN 
              </button>
              <br/>
              <br/>
              <Link to="/signup">Don't have an account? Register</Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
