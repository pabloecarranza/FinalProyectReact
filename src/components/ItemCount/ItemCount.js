import { Button} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from "react";
import './ItemCount.css'
import {Link} from 'react-router-dom'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';


export default function ItemCount({stock, onAdd}) {
    
    const [item, setItemCount] = useState(0)
    const [stockNow, updateStock] = useState(stock)


    const sumaItem = () => {
        item <= stock && setItemCount(item + 1) 
    }

    const restaItem = () => {
        item > 0 && setItemCount(item - 1) 
    } 

    const handleClick = () => {
        updateStock(stock = stockNow - item) 
        onAdd(item)
    }
   
    return(
         <>   
            <div className='all-buttons'>
                <div className='button-container'>
                    <p className="counter-p">Cantidad: </p>
                    <Button variant='contained' disabled={item <= 0} onClick={restaItem} ><RemoveIcon /></Button>       <span style={{padding: '0.4em 3em', background: 'white'}}> {item} </span><Button variant='contained' disabled={item >= stockNow}  onClick={sumaItem}><AddIcon /></Button>
                </div>
                {
                    stock > stockNow ?  
                    <div className="after-shop">
                        <Link className="link" to='/category/all'> 
                            <Button color="secondary" variant='outlined' className='back-button'> 
                                <ArrowBackIos /> KEEP SHOPPING 
                            </Button> 
                        </Link> 
                        <Link className="link" to='/cart'> 
                            <Button color="primary" variant='outlined' className='cart-button'> COMPLETE ORDER 
                                <ShoppingCartIcon /> 
                            </Button> 
                        </Link> 
                     </div> : 
                     <Button color="secondary" className='cart-button' onClick={handleClick} disabled={item === 0 || stockNow <= 0} variant="contained"> ADD TO CART 
                     </Button> 
                }

                 <div className='stock-products'>
                    { 
                    (stockNow <= 0) ? <p> OUT OF STOCK</p> : <p>Available stock: {stockNow}</p>
                    }
                </div>
            </div>
        </>     
    )

}

