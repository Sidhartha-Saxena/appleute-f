import React from "react";
import { useEffect,useState } from "react";
import Productcard from "../components/productcard";

export default function Home() {
    const [products,setProducts]=useState(null)

    useEffect(()=>{
        fetch("http://localhost:5000/api/v1/prod/")
              .then((response) => response.json())
              .then((data) => setProducts(data.products));
    },[])
  return (
    <>
<div className="bg-primary text-white py-5">
    <div className="container py-5">
      <h1>
        Best products & <br />
        brands in our store
      </h1>
      <p>
        Trendy Products, Factory Prices, Excellent Service
      </p>
      <button type="button" className="btn btn-outline-light me-2">
        Learn more
      </button>
      <button type="button" className="btn btn-light shadow-0 text-primary pt-2 border border-white">
        <span className="pt-1">Purchase now</span>
      </button>
    </div>
  </div>
  <section>
  <div className="container my-5">
    <header className="mb-4">
      <h3>New products</h3>
    </header>

    <div className="row">
        {products && products?.map((element,i) => {
            return (<Productcard name={element.name} price={element.price} prodimg={element.image} key={i}/>)
        })}
    </div>
  </div>
</section>
    </>
  );
}
