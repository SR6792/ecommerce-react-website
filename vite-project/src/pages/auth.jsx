import { useContext, useState } from 'react'
import './auth.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../context/AuthContext'; 
export default function Auth(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signup,user,login,logout } = useContext(AuthContext);
    const [error, setError] = useState(null);
    
    //calls obj made elsewhere sort of like global variable
    const location = useLocation();//to find route name
    const mode = location.pathname === '/signup' ? 'signup' : 'login'
    const nav = useNavigate();//to go to a page after logged in / action done
    function onSubmit(data){
        setError(null)
        let result;
        if(mode==='signup'){
            result = signup(data.email,data.password);
        }
        else{
            result = login(data.email,data.password);
        }

        //checks if user successfully logged in
        if(result.success){
            nav("/");//should have route or link on where to go inside
        }

        else{
            setError(result.error);
        }
    }

    
    return(
        <div>
            <div className='hero2'>
                {/* if there is user logged in then display logout btn along wiht their mail */}
                {user && <div>
                    <p>User logged in : {user.email}</p>
                    <button onClick={()=>logout(user.email,user.password)}>Logout</button>
                    </div>  
                }
                <h1>{mode=== 'signup' ? "Sign Up" : "Login"}</h1>
                <form className='form1' onSubmit={handleSubmit(onSubmit)}>
                    <label>Enter Email</label>
                    <input type="text" placeholder="Email" {...register("email", {required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email" }})} />
                    {errors.email && <p className='error'>{errors.email.message}</p>}
                    <label>Enter password</label>
                    <input type="password" placeholder="Password" {...register("password", {required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" }})} />
                    {errors.password && <p className='error'>{errors.password.message}</p>}
                    {error && <p className='error'>{error}</p>}
                    <button type="submit" className='btn2'>{mode=== 'signup' ? "Sign Up" : "Login"}</button>
                </form>
                <div className='smallbtn'>
                    {mode === 'signup'
                        ? <p>Already have an account? <Link to='/login' className='sp'>Login</Link></p>
                        : <p>Don't have an account? <Link to='/signup' className='sp'>Sign Up</Link></p>
                    }
                </div>
                
            </div>
        </div>
    )
}