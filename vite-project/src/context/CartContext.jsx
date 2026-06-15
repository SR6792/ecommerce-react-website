import { createContext,useState } from "react"
import { getProductById } from "../data/product";

export const CartContext = createContext("null");
export default function CartProvider({children}){
    //to check all exisiting items in cart
    const [cart,setCart] = useState([]);
    //
    const addToCart = (prodId) => {
        //to check if prod already exist in cart,ie user selected it many times
        const existCart = cart.find((item)=> item.id === prodId);
        if(existCart){
            const currentQty = existCart.quantity;
            const updatedC = cart.map((item) => 
                item.id === prodId 
                ?{id:prodId,quantity:currentQty+1}
                :item
            );
            
            //basically only increment qty of selected items rest same 
            setCart(updatedC);
        }
        //if no prod in cart before
        else{
            const newC = [...cart,{id:prodId,quantity:1}];
            setCart(newC);
        }
        
    }
    function getCartItems(){
        return cart.map((item)=>({
            ...item,
            product:getProductById(item.id),
            
        }));
    }

    function alterCartItems(mode,id1){
        const exiProduct = cart.find((item)=>item.id===id1);
        if(!exiProduct) return;
        const newC = cart.map((item) => 
            item.id === id1 ?
            {id:id1, quantity: mode === "+" ? exiProduct.quantity+1 : exiProduct.quantity-1}:
            item
        );
        setCart(newC);
    }

    function removeC(id){
        const remP = cart.filter((item)=>item.id!==id);
        setCart(remP);
    }

    function sumC(){
        return cart.reduce((sum,item)=>{
            const prod1 = getProductById(item.id);
            return sum+ item.quantity*prod1.price;
        },0);
    }

    return(
        <CartContext.Provider value={{cart,addToCart,getCartItems,alterCartItems,removeC,sumC}}>{children}</CartContext.Provider>
    )
}

