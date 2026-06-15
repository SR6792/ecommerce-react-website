import { useParams } from "react-router-dom"
import { getProductById } from "../data/product";
import './prodD.css'
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
export default function ProdDetails(){
    //to get id or basically any info after second '/'
    const {id} = useParams();
    const prod = getProductById(id);
    const {cart,addToCart} = useContext(CartContext);
    const prodInCart = cart.find((item)=> item.id == id);
    const qty = prodInCart ? (prodInCart.quantity) : "";//if already exist in cat then no fo times ordered else blank
    return(
        <div className='prod1'>
            <img src={prod.image} alt={prod.name}></img>
            <div className="prod2">
                <div className='prod-content1'>
                    <h1>{prod.name}</h1>
                    <p>{prod.description}</p>
                </div>
                <div>
                    <h1>{prod.price}</h1>
                    <button className='btn1 btn1-secondary' onClick={() => addToCart(prod.id)} >Add To Cart {qty}</button>
                </div>
            </div>
        </div>
    )
}