import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {v4 as uuid} from "uuid";
import ProductCard from './productCard';
import "../styles/products.scss";
import {useDispatch,useSelector} from "react-redux"
import { fetchProducts } from '../redux/slice/productsSlice';

// const url = "https://mock.redq.io/api/products?searchJoin=and&with=type%3Bauthor&limit=30&language=en&search=type.slug:grocery%3Bstatus:publish";
export default function Products() {
    // const [products,setProducts] = useState([]);
    // const fetchProducts = async() => {
    //     try {
    //         const {data} = await axios.get(url);
    //         setProducts(data.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // useEffect(()=>{
    //     fetchProducts()
    // },[])
    const products = useSelector(state => state.Products.value)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchProducts());
    },[])
  return (
    <div className='productsContainer'>
        {products.length && products.map(e => <ProductCard key={uuid()} product={e}/>)}
    </div>
  )
}
