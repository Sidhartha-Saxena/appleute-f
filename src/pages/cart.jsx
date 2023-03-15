import React, { useEffect,useState } from 'react'
import Cartitem from '../components/cartitem';

export default function Cart() {
    const [products,setProducts]=useState(null);
    const [prod,setProd]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/api/v1/cart/",{method: "GET",mode: "cors", headers:{Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDEwODRmNDc0NGVlNjE5ZTk1MzkxOTAiLCJuYW1lIjoicGV0ZXIiLCJpYXQiOjE2Nzg4MDQyMTMsImV4cCI6MTY4MTM5NjIxM30.Hhby4I3ZQz2ZFEdaeEBJigZ7jnLrCQPwDvKr5rneRi8'}})
              .then((response) => response.json())
              .then((data) => setProducts(data.cartItems));
    },[])
    useEffect(()=>{
        products?.forEach((el)=>{ fetch(`http://localhost:5000/api/v1/prod/${el.productId}`)
        .then((response) => response.json())
        .then((data) => setProd(arr=>[...arr,data]))})
    },[products])
  return (
    <>
<section className="bg-light my-5">
  <div className="container">
    <div className="row">
      <div className="col-lg-9 mt-2">
       { products && prod?.map((el,i)=>{ return(<Cartitem key={i} name={el.name} price={el.price} desc={el.description} prodimg={el.image} quantity={products[i].quantity}  />)})}
      </div>
      <div className="col-lg-3 mt-2">
        <div className="card shadow-0 border">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <p className="mb-2">Total price:</p>
              <p className="mb-2">$329.00</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="mb-2">Discount:</p>
              <p className="mb-2 text-success">-$60.00</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="mb-2">TAX:</p>
              <p className="mb-2">$14.00</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <p className="mb-2">Total price:</p>
              <p className="mb-2 fw-bold">$283.00</p>
            </div>

            <div className="mt-3">
              <a href="/" className="btn btn-success w-100 shadow-0 mb-2"> Make Purchase </a>
              <a href="/" className="btn btn-light w-100 border mt-2"> Back to shop </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
