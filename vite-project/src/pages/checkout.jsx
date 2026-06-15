import { useParams } from "react-router-dom";
import { getProductById } from "../data/product"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import './checkout.css'
export default function Checkout(){
    const {getCartItems,alterCartItems,removeC,sumC} = useContext(CartContext);
    const cartItems = getCartItems();
    return(
        <div>
            <h1>Checkout Page</h1>
            <div className='prod-list1'>
                <h1>Order Summary</h1>
                {cartItems.map((item)=>(
                        <div className='container1' key={item.product.id}>
                            <img src={item.product.image}></img>
                            <div className="c2">
                                <h3>{item.product.name}</h3>
                                <p>{item.product.price} each</p>
                            </div> 
                            <div className="alterC1">  
                                <div className="alterCart">
                                    <button onClick={()=>alterCartItems("-",item.id)}>-</button>
                                    <span><p>{item.quantity}</p></span>
                                    <button onClick={()=>alterCartItems("+",item.id)}>+</button>
                                </div>
                                <div className="alterC2">
                                    <p>${item.product.price * item.quantity}</p>
                                    <button className="btn13" onClick={()=>removeC(item.id)}>Remove</button>    
                                </div> 
                            </div>
                        </div>
                ))}
                <div>
                    <h1>Total:{sumC()}</h1>
                </div>
                
            </div>
        </div>
    )
}