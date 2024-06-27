import logo from '../Images/logo.png'
import './index.css'

function Footer(){
    return(
        <div className='footer'>
            <div>
                <img className='shopy-logo' src={logo} alt='shopfy logo'/>
                <ul>
                    <li><strong>A</strong> 86 Main Design Street, Australia Sydney</li>
                    <li><strong>T</strong> 86 Main Design Street, Australia Sydney</li>
                    <li><strong>E</strong> 86 Main Design Street, Australia Sydney</li>
                </ul>
            </div>

            <div>
                <ul>
                    <li>Wishlist</li>
                    <li>Shipping info</li>
                    <li>Order Tracking</li>
                    <li>Payment Method</li>
                </ul>
            </div>

            <div>
                <ul>
                    <li>Returns</li>
                    <li>Find Store</li>
                    <li>Credit Cards</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Terms</li>
                    <li>Report Problem</li>
                    <li>Check Quality</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;