import './index.css'
import NavBar from '../NavBar';


function Login (){
   return(
    <div>
        <NavBar/>
        <form className='signUpForm'>
                <h1>Login</h1>
                <br/>
                <br/>              
                <input placeholder="Enter UserName" type="text" className='signup-inputs' required/>
                <br/>
                <br/>
                <input placeholder="Enter Password" type="password" className='signup-inputs' required/>
                <br/>
                <br/>
                <button type="submit" className='register-button'>Sign In</button>
                <br/>
                <br/>
                <h4 className='already-text2'>Forgot Password?</h4>
        </form>
    </div>
   )
}

export default Login;