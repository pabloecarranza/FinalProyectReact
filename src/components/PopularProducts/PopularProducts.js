import {useEffect, useState} from 'react';

import './PopularProducts.css'

import { collection, getDocs } from 'firebase/firestore'
import db from '../../firebase/firebaseconfig'

import { Link } from 'react-router-dom';


const PopularProducts = () => {
  const [dataProducts, setDataProducts] = useState([])

  useEffect(() => {
      const getData = async() => {
        const dataFS = await getDocs(collection( db, 'products'))
        const productsFS = dataFS.docs.map(doc => {
            let product = doc.data()
            product.id = doc.id
            return product})
        setDataProducts(productsFS.filter(product => product.id === 'DQje8qkLdh5iVOOSnKrU' || product.id === 'LVcW6U0rU8oNQ5Ejqwnx' || product.id === 'IS6gfuTFCW5y2mNACXej'  
                ))  
    }
    getData()
  }, []);
  

  return (<section className='trending-container'>
    <h2 className='hometitle'>Trending now </h2>

    <div className='productcards-container'>
    {
      dataProducts.map( (product) => {
        return(
          <Link key={product.id} to={`/product/${product.id}`}>
            <div className='productcard'>
              <div className='productcard-img'>

                {
                  <img src={`../../images/products/${product.image}`} alt='#' />
                }
                
              </div>
              <div className='productcard-text'>
                <h3>{product.title}</h3>
                <p>${product.price}</p>
              </div>
            </div>
        </Link>)
      })
    }
    </div>

  </section>)
};

export default PopularProducts;
