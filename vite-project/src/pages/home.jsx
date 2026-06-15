import './home.css'
import { getProducts } from '../data/product'
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ProductCart from './ProductCard';
export default function Home(){
    const products = getProducts();
    const {cart,addToCart} = useContext(CartContext);
    return(
        <div className='home-page'>
            <div className='hero'>
                <h1>Welcome to ShopHub</h1>
                <p>Discover amazing products</p>
            </div>
            <div className='container'>
                <h2>Our Products</h2>
                <div className='prod-list'>
                    {products.map(prod => (
                        <ProductCart  product={prod} key={prod.id}/>
                    ))}
                </div>
            </div> 
        </div>
    )
}