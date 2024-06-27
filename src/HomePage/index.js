import './index.css'
import blackcoat from '../Images/blackcoat.jpg';


export function Home(){
return(
    <div>
        <div className='home-body'>
            <div className='home-body-left'>
                <div className='home-text'>
                <h1>Stylish Coat</h1>
                <div className='home-normal-text'>
                <p>We design stylish and fashionable clothes with
                    very special offers for a different season
                </p>
                </div>
               
                <p className='red-home-text'>50% off for first 10 buyers!</p>
                </div>
                <div className='home-buttons'>
                    <button className='add-to-cart-btn'>ADD TO CART</button>
                    <button className='wishlist-btn'>WISHLIST</button>
                </div>
                
                
            </div>
            <img src={blackcoat} className='blackcoat-img' alt='landing page coat'/>
        </div>
        
    </div>
)
}