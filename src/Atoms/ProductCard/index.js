import './index.css'
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5"
const ProductCard = ({image,title,price}) =>{
return(
    <div className='product-card'>
        <img className="product-img" src={image} alt={title}/>
        <div className='product-words'>
            <div className='price-tag'>
              <h2 className='product-name'>{title}</h2>
              <IoCartOutline className='cart2-icon'/>
            </div>

            <div className='price-tag2'>
             <h4>${price}</h4>
             <CiHeart className='heart-icon'/>        
            </div>
        
        </div>
       
    </div>
)
}

export default ProductCard;