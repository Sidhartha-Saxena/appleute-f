import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate=useNavigate();
  const loginuser = async () => {
    let reqbody = {
      "email":email,
      "password":password
    };
    localStorage.clear();
    fetch("http://localhost:5000/api/v1/auth/login", {
      method: "POST",
      headers: { "Content-type": "application/json;charset=UTF-8" },
      body: JSON.stringify(reqbody),
    })
      .then((response) => response.json())
      .then((data) => localStorage.setItem('token',JSON.stringify(data.token)))
      console.log(localStorage.getItem('token'))
      fetch("http://localhost:5000/api/v1/cart/", {
        method: "POST",
        headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` },
      })
        .then((response) => response.json())
        .then((data) => console.log('cart created'))
        navigate('/home')
  };
  return (
    <>
      <form className="w-50 d-flex flex-column mx-auto mt-5">
        <div className="form-outline mb-4 ">
          <input
            name="email"
            autoComplete="off"
            id="emaillogin"
            type="email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            className="form-control"
          />
          <label className="form-label" htmlFor="emaillogin">
            Email address
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            name="password"
            autoComplete="off"
            id="passwordlogin"
            type="password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            className="form-control"
          />
          <label className="form-label" htmlFor="passwordlogin">
            Password
          </label>
        </div>
        <button
          type="button"
          className="btn btn-primary btn-block mb-4"
          onClick={loginuser}
        >
          Sign in
        </button>
        <button type="button" className="btn btn-primary btn-block mb-4">
          <Link to="/register" className="text-white text-decoration-none">
            Register
          </Link>
        </button>
      </form>
    </>
  );
}
