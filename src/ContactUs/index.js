import './index.css'
import NavBar from '../NavBar';
import Footer from '../Footer';


function Contact (){
   return(
    <div>
        <NavBar/>
        <form className='signUpForm'>
                <h1>Send Us A Message</h1>
                <br/>
                <br/>              
                <input placeholder="Enter UserName" type="text" className='signup-inputs' required/>
                <br/>
                <br/>
                <input placeholder="Enter Email(example@gmail.com)" type="email" className='signup-inputs' required/>
                <br/>
                <br/>
                <input placeholder='Type message here.....' className='message-input'/>
                <br/>
                <br/>
                <button type="submit" className='register-button'>Send</button>
               
        </form>
        <Footer/>
    </div>
   )
}

export default Contact;