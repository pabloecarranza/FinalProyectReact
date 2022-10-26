import './Categories.css'
import {Link} from 'react-router-dom'

const Categories = () => {
    const categories = [{
        name: 'perfume',
        img: 'perfume.jpg'
    },
    {
        name: 'creams',
        img: 'cream.jpg'
    },
    {
        name: 'serums',
        img: 'serum.jpg'
    },
    {
        name: 'face masks',
        img: 'facemask.jpg'
    }]

    return(<div className='categories'>

    <h2 className='hometitle'>Categories</h2>
    
    
    <div className='categories-container'>


        {
            categories.map((category) => {
                return(
                <Link key={category.img} to={`/category/${category.name}`}>
                <div className='categorymain-container'>
                    <img src={`../../images/categories/${category.img}`} 
                    alt='people using skincare products'></img>
                    
                    <div className='categorytext-container'>
                    <h2>{category.name}</h2>
                    </div>
                </div>
                </Link>)
            })
        }
    </div>
    </div>)
}

export default Categories