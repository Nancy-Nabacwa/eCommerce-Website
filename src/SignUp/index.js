import './index.css'
import NavBar from '../NavBar';
import { Link } from 'react-router-dom'
import { FaFacebookSquare } from "react-icons/fa";


function SignUp (){
   return(
    <div>
        <NavBar/>
        <form className='signUpForm'>
                <h1>SIGN UP</h1>
                <button type="submit" className='facebook-button'>< FaFacebookSquare/> <div>Sign up with facebook</div></button>
                <br/>
                <br/>                
                <input placeholder="Enter UserName" type="text" className='signup-inputs' required/>
                <br/>
                <br/>
                <input placeholder="Enter Password" type="password" className='signup-inputs' required/>
                <br/>
                <br/>
                <button type="submit" className='register-button'>Register</button>
                <br/>
                <br/>
                <h4 className='already-text'>Already have an account?<Link to='/Login' className='login-link'>Login</Link> </h4>
        </form>
    </div>
   )
}

export default SignUp;