import React from 'react'

export default function Productcard({name,price,prodimg}) {
const addToCart=()=>{

}
  return (
    <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
    <div className="card w-100 my-2 shadow-2-strong">
      <img alt='product iamge' src={prodimg} className="card-img-top" style={{aspectRatio: 1 / 1}} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-capitalize">{name}</h5>
        <p className="card-text">${price}</p>
        <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto" onClick={addToCart}>
          <a href="/" className="btn btn-primary shadow-0 me-1">Add to cart</a>
        </div>
      </div>
    </div>
  </div>
  )
}
