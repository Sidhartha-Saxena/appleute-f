import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [email, setemail] = useState("");
  const [username, setuserName] = useState("");
  const [password, setpassword] = useState("");
  const navigate=useNavigate();
  const loginuser = async () => {
    
    let reqbody = {
      "email":email,
      "password":password,
      "name":username
    };
    localStorage.clear();
    fetch("http://localhost:5000/api/v1/auth/register", {
      method: "POST",
      headers: { "Content-type": "application/json;charset=UTF-8" },
      body: JSON.stringify(reqbody),
    })
      .then((response) => response.json())
      .then((data) => localStorage.setItem('token',JSON.stringify(data.token)))
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
            id="emailregist"
            type="email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            className="form-control"
          />
          <label className="form-label" htmlFor="emailregist">
            Email address
          </label>
        </div>
        <div className="form-outline mb-4 ">
          <input
            name="username"
            autoComplete="off"
            id="username"
            type="text"
            value={username}
            onChange={(e) => {
              setuserName(e.target.value);
            }}
            className="form-control"
          />
          <label className="form-label" htmlFor="username">
            Name
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            name="password"
            autoComplete="off"
            id="passwordregist"
            type="password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            className="form-control"
          />
          <label className="form-label" htmlFor="passwordregist">
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
      </form>
    </>
  );
}
