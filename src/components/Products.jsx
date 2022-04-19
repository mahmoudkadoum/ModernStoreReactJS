import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Products = () => {

  const [products, setProducts] = useState([]);

  
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then(res=>setProducts(res.data))
  }, [])

  const cardItem = (item) => {
  return (
    <div className="card my-5 py-4 align-content-between" key={item.id} style={{width: "18rem"}}>
      <img src={item.image} className="h-100 card-img-top" alt={item.title}/>
      <div className="flex-shrink-1 card-body text-center">
          <h5 className="card-title">{item.title}</h5>
          <p className="lead">${item.price}</p>
          <NavLink to={`/products/${item.id}`} className=" btn btn-outline-primary">Buy Now</NavLink>
      </div>
    </div>
  );
} 

  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Product</h1>
            <hr/>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">
          {products.length && products.map(cardItem)}
        </div>
      </div>
    </>
  )
}

export default Products