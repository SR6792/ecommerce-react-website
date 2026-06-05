import {Link} from 'react-router-dom'
import './navbar.css'
import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'
export default function Navbar(){
    const {signup,login,user,logout} = useContext(AuthContext);
    return (
        <div className='nav1'>
            <div>
                <h1>ShopHub</h1>
            </div>
            <div className='div1'>
                <Link to='/' className='d1'>Home</Link>
                <Link to='/cart' className='d2'>Cart</Link>
            </div>
            <div className='div2'>
                {/* choose what to display when not loggend in/ and when logged in */}
                {!user?
                    
                        <div>
                            {/* 2 routes one for login and signup */}
                            <Link to='/login' className='btn'>Login</Link>
                            <Link to='/signup' className='btn btn-secondary'>Signup</Link>
                        </div>
                    :
                    <div>
                        <span>Hi {user.email}</span>
                        <button  onClick={() => logout(user.email,user.password)} >Logout</button>
                    </div>
                }
            </div>
        </div>
    )
}
