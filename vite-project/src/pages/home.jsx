import './home.css'
import { getProducts } from '../data/product'
import {Link} from 'react-router-dom'
export default function Home(){
    const products = getProducts();
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
                        <div className='prod' key={prod.id}>
                            <img src={prod.image} alt={prod.name} />
                            <div className='prod-content'>
                                <h2>{prod.name}</h2>
                                <p>${prod.price}</p>
                            </div>
                            <div className='btn12'>
                                <Link className='btn1'>View Details</Link>
                                <button className='btn1 btn1-secondary'>Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}