
import { useState, useContext } from 'react';
import './CartWidget.css'
import { Cart3, XCircle } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import CartContext from '../../contexts/CartContext/CartContext';
import { Button, Fade, Grow } from '@mui/material';

const CartWidget = () => {

    const [isActive, setIsActive] = useState(false)
    const {products, onRemove, clear} = useContext(CartContext)

    return (

        <div className='cart-container' onMouseEnter={()=> setIsActive(true)} onMouseLeave={()=> setIsActive(false)}>

                <Link className='link' to="/cart">
                    <Cart3 className='cart-icon'  size={15}   />
                    <span className='cart-span link'>{products.length}</span>
                </Link>
            {isActive && 
            <Fade in={isActive} ><div className='widget-container'  >
                {products.length > 0 ? 
                <> {products.map( product =>{
                    return (
                    <Grow in={isActive} key={product.title}><div className='widget-item' >

                        
                        <span className='widget-span quantity'>{product.quantity}</span>
                        
                        <img src={`../../images/products/${product.image}`} alt={product.description}></img>
                        
                        <div className='item-text-container'>
                            <h1 className='cart-text'> {product.title} </h1> 
                            <h2 className='cart-text'>${Number(product.price).toFixed(2)}</h2>
                        </div>

                        <span onClick={() => onRemove(product)} className='widget-span delete'><XCircle size={15}  /></span>
                    </div></Grow>) 
                 }) }
                 <Button onClick={() => clear()}> Clear Cart </Button>
                 </>
    
                 : 
                     setIsActive(!isActive)
                    
                    
                }
            </div></Fade>} 
            
        </div>
        
    )
}

export default CartWidget