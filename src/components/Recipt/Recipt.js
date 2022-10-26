import React from 'react'
import CartContext from '../../contexts/CartContext/CartContext'
import { useContext } from 'react'
import './Recipt.css'

const Recipt = () => {
    
    const {products, total} = useContext(CartContext)

    return (
        <>
           {
                products.map( product => {
                    return(
                    <div key={product.title} className='recipt-text'> 
                        <h2>x{product.quantity} {product.title}</h2> 
                        <h3>${Number(product.price * product.quantity).toFixed(2)}</h3>  
                    </div>)
                }

                )
            }
           
            <div className='recipt-text'>
                <h3 className='shipping-text' >SHIPPING: </h3>
                <h3 className='shipping-text'> FREE </h3>
            </div>
            
            <hr></hr>

            <div className='total-container'>
                <h2 className='total-text'>Total: </h2>
                <h2 className='total-price'> ${Number(total).toFixed(2)} </h2>
            </div>
             
        </>
    )
}

export default Recipt
