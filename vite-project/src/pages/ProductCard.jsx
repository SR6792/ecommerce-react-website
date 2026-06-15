import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { getProducts } from "../data/product";
export default function ProductCart({product}){
    //for individual prod cards in home
    const {cart,addToCart} = useContext(CartContext);
    const prod = cart.find(item=>item.id===product.id);
    const qty = prod? prod.quantity:"";
    return(
        <div className='prod' key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className='prod-content'>
                <h2>{product.name}</h2>
                <p>${product.price}</p>
            </div>
            <div className='btn12'>
                <Link className='btn1' to = {`/prod/${product.id}`}>View Details</Link>
                <button className='btn1 btn1-secondary' onClick={()=>addToCart(product.id)}>Add to Cart {qty}</button>
            </div>
        </div>
    )
}