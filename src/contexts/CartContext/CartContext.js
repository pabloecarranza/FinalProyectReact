import { createContext, useState, useEffect } from "react";

const CartContext = createContext()

const productsFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]' )

const CartProvider = ({children}) => {
    const [products, setProducts] = useState(productsFromLocalStorage)

    
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(products))
        
    }, [products])

    const addProduct = (product) => {
        
        const exists = products.find(item => item.title === product.title)
        
        exists ? 
        setProducts(products.map(
            x => x.title === product.title ? 
            {...exists, quantity: exists.quantity + product.quantity } 
            : x)) :
        setProducts(products => [...products, product])

    }
    
    const onRemove = (item) => {
        setProducts(products.filter(x => x.title !== item.title)
            )
    }

    const clear = () => {
        setProducts([])
    }

  
    const total = products.reduce(function (acc, curr) {
        return acc + curr.quantity * curr.price;
    },0);

   
    const data ={ 
        products,
        addProduct,
        onRemove,
        clear,
        total
    }

   

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )

}

export {CartProvider}
export default CartContext
