import logo from '../Images/logo.png'
import {IoIosSearch} from 'react-icons/io'
import { IoPersonSharp } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5"
import './index.css'
import {Link} from "react-router-dom"

function NavBar(){
    return(
        <div>
             <div className="navbar">
            <div className='navbar-left'>
                <img className='shopy-logo' src={logo} alt='shopfy logo'/>
                
                <div className='shopy-links'>
                    <Link to="/" className='text-link'>
                    <div className='link'>Home</div>
                    </Link>

                    <Link to="/Women" className='text-link'>
                    <div className='link'>Women</div>
                    </Link>

                    <Link to="/Men" className='text-link'>
                    <div className='link'>Men</div>
                    </Link>                   
                    
                    <Link to="/Sale" className='text-link'>
                    <div className='link'>Sale</div>
                    </Link>
                    
                    <Link to="/Offers" className='text-link'>
                    <div  className='link'>Offers</div>
                    </Link>

                    <Link to="/Gifts" className='text-link'>
                    <div className='link'>Gifts</div>
                    </Link>

                    <Link to="/Contact" className='text-link'>
                    <div className='link'>Contact</div>
                    </Link>
                            
                </div>
                <IoIosSearch className='search-icon'/>
            </div>
            <div className='navbar-right'>

                <Link to="/SignUp" className='text-link2'>
                    <IoPersonSharp className='location-icon'/>
                    <div  className='link2'>SignUp</div>
                </Link>
                <Link to="/Cart" className='text-link2'>
                    <IoCartOutline className='cart-icon'/>
                    <div  className='link2'>Cart</div>
                </Link>                
                                
                
            </div>
        </div>
        </div>
    )
}

export default NavBar;