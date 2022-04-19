import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {addItem, delItem} from '../redux/actions/index'

const ProductDetail = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then(res=>setProducts(res.data))
      }, [])
    const [cartBtn, setCartBtn] = useState("Add to Cart")
    const proid = useParams();
    const proDetail = products.filter(x=>x.id == proid.id)
    const product = proDetail[0];
    console.log(product);

    // We need to store useDispatch in a variable
    const dispatch = useDispatch()

    const handleCart = (product) => {
        if (cartBtn === "Add to Cart") {
            dispatch(addItem(product))
            setCartBtn("Remove from Cart")
        }
        else{
            dispatch(delItem(product))
            setCartBtn("Add to Cart")
        }
    }

    return (
        <>
        <div className="container my-5 py-3">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center mx-auto product">
                    {products.length && <img src={product.image} alt={product.title}height="400px" />}
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    {products.length && <h1 className="display-5 fw-bold">{product.title}</h1>}
                    <hr />
                    {products.length && <h2 className="my-4">${product.price}</h2>}
                    {products.length && <p className="lead">{product.description}</p>}
                    <button onClick={()=>handleCart(product)} className="btn btn-outline-primary my-5">{cartBtn}</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductDetail
