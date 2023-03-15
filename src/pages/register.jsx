import React from 'react'

export default function Register() {
  const registeruser=async()=>{
    let reqbody={}
    reqbody["email"]=document.getElementById('emailregister')
    reqbody["name"]=document.getElementById('nameregister')
    reqbody["password"]=document.getElementById('passwordregister')
     fetch("http://localhost:5000/api/v1/auth/login",{method: "POST",mode: "cors",headers:{"Content-Type": "application/json",},body:reqbody})
    .then((response) => response.json())
    .then((data) =>  console.log(data))
  }
  return (
     <>
      <form className="w-50 d-flex flex-column mx-auto mt-5">
        <div className="form-outline mb-4 ">
          <input type="email" id="emailregister" className="form-control" />
          <label className="form-label" for="emailregister">
            Email address
          </label>
        </div>
        <div className="form-outline mb-4 ">
          <input type="email" id="nameregister" className="form-control" />
          <label className="form-label" for="nameregister">
            Name
          </label>
        </div>

        <div className="form-outline mb-4">
          <input type="password" id="passwordregister" className="form-control" />
          <label className="form-label" for="passwordregister">
            Password
          </label>
        </div>
        <button type="button" className="btn btn-primary btn-block mb-4">
          Register
        </button>
      </form>
    </>
  )
}
