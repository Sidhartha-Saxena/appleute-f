import React from 'react'

export default function Cartitem({name,price,desc,prodimg,quantity}) {
    console.log('cart items')
  return (
    <div className="row gy-3 mb-4">
              <div className="col-lg-5">
                <div className="me-lg-5">
                  <div className="d-flex">
                    <img alt='product' src={prodimg} className="border rounded me-3" style={{width: '96px', height: '96px'}} />
                    <div className="">
                      <a href="/" className="nav-link">{name}</a>
                      <p className="text-muted">{desc}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                <div className="">
                  <select style={{width: "100px"}} className="form-select me-4">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
                <div className="">
                  <p className="h6">${price*quantity}</p> <br />
                  <small className="text-muted text-nowrap"> {price} / per item </small>
                </div>
              </div>
              <div className="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
                <div className="float-md-end">
                  <a href="/" className="btn btn-light border text-danger icon-hover-danger"> Remove</a>
                </div>
              </div>
            </div>
  )
}
