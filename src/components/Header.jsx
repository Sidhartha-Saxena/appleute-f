import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      {localStorage.getItem('token') &&<nav className="navbar bg-dark">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand text-white">Brand</Link>
          <Link to='/' className="navbar-brand text-white">Cart</Link>
        </div>
      </nav>}
    </>
  );
}
