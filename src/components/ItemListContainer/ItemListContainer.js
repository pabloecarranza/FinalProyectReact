import './ItemListContainer.css'
import { useState , useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import { Button, ButtonGroup } from '@mui/material'
import {Link, useParams} from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore' 
import db from '../../firebase/firebaseconfig'


const ItemListContainer = () => {
    const params = useParams()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [activeCategory, setActiveCategory] = useState(params.id)
    const categories = ['perfume', 'creams', "serums", "face masks"]
    const [winWidth, setWinWidth] = useState(window.innerWidth)
    const buttonStyle = winWidth < 760 ? 'small' : 'large'

    const detectWidth = () => {
        setWinWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', detectWidth)
        return() => {
            window.removeEventListener('resize', detectWidth)
        }
    }, [winWidth])

    
    useEffect(() => {
        setLoading(true)
        const getData = async() => {
            const dataFS = await getDocs(collection( db, 'products'))
            const productsFS = dataFS.docs.map(doc => {
                let product = doc.data()
                product.id = doc.id
                return product})
            setData(productsFS.filter((item) => (params.id === 'all' || activeCategory === 'all') ? 
                    productsFS : 
                    item.category === activeCategory))
            setLoading(false)
            
        }
        getData()
        
        
    }, [params.id, activeCategory, data.id])

    return (
        <div className='itemlist-container'>   
                
        <div className='category-container'>
        <ButtonGroup  variant="outlined" size={buttonStyle}>
            <Link onClick={()=>{setActiveCategory('all')}} className='link' to={`/category/all`}>

                <Button color={(params.id === 'all') ? 'secondary' : 'primary'}>all</Button>
                

            </Link>

            {
                categories.map((category) => {
                    return(
                        <Link 
                        onClick={()=>{setActiveCategory(category)}} 
                        className='link' 
                        to={`/category/${category}`}
                        key={category}>

                            <Button 
                            color={(activeCategory === category && params.id !== "all")? 'secondary' : 'primary'} 
                             >{category}</Button>

                        </Link>
                    )
        
                })
            }
                
                </ButtonGroup>   
                </div>

                <ItemList data={data} loader={loading} />
            
        </div>
    )   
}

export default ItemListContainer