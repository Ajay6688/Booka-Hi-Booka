import React from "react";
import { Link } from "react-router-dom";
import loginImg from "./images/login.jpg";

export default function Register() {
  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col-sm">
            <img className="login-img" src={loginImg} alt="not available" />
          </div>
          <div className="form-wrapper col-sm  ">
            <form className="login-form ">
              
              <h1 className="text-center ">SIGN UP</h1>

              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Full name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Full name"
                />
                <br/>
              </div>
              
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <br/>
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
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Repeat Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <br/>
              <button type="submit" className="btn btn-primary">
                SIGN UP 
              </button>
              <br/>
              <br/>
              <Link to="/login">Already have an account? Sign in</Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
