import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const loginuser=async()=>{
    let reqbody={}
    reqbody["email"]=document.getElementById('emaillogin')
    reqbody["password"]=document.getElementById('passwordlogin')
     fetch("http://localhost:5000/api/v1/auth/login",{method: "POST",mode: "cors",headers:{"Content-Type": "application/json",},body:reqbody})
    .then((response) => response.json())
    .then((data) =>  console.log(data))
  }
  return (
    <>
      <form className="w-50 d-flex flex-column mx-auto mt-5">
        <div className="form-outline mb-4 ">
          <input type="email" id="emaillogin" className="form-control" />
          <label className="form-label" for="emaillogin">
            Email address
          </label>
        </div>

        <div className="form-outline mb-4">
          <input type="password" id="passwordlogin" className="form-control" />
          <label className="form-label" for="passwordlogin">
            Password
          </label>
        </div>
        <button type="button" className="btn btn-primary btn-block mb-4" onClick={loginuser}>
          Sign in
        </button>
        <button type="button" className="btn btn-primary btn-block mb-4">
          <Link to='/register' className="text-white text-decoration-none">Register</Link>
        </button>
      </form>
    </>
  );
}
