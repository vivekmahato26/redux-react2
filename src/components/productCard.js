import React from 'react'

// import { addTocart } from '../redux/slice/cartSlice';
import { useDispatch, useSelector } from 'react-redux';


import "../styles/productCard.scss";
export default function ProductCard({ product }) {
    const cart = useSelector(state => state.Cart); // READ ONLY
    console.log(cart)

    const dispatch = useDispatch();
    return (
        <div className='productCard'>
            {product.sale_price && <p className='discount'>{Math.round(((product.price - product.sale_price) / product.price) * 100)}%</p>}
            <img src={product.image.original} />
            <div className='flexBox'>
                {product.sale_price &&<p className='price'>${product.sale_price}</p>}
                <p className={`price ${product.sale_price && "strike"}`}>${product.price}</p>
            </div>
            <p>{product.name}</p>
            {/* <button onClick={()=>dispatch(addTocart(product))}>Add to cart</button> */}
        </div>
    )
}
