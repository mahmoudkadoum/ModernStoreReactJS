import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CartBtn = () => {
    const state = useSelector((state)=> state.addItem)
    return (
        <div>
            <NavLink to="/cart" className="btn btn-outline-primary ms-2">
                <span className="fa fa-shopping-cart me-1"></span> Cart ({state.length})
            </NavLink>
        </div>
    )
}

export default CartBtn
