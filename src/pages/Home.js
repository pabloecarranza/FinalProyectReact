import React from 'react'
import ImageSlider from '../components/ImageSlider/ImageSlider'
import PopularProducts from '../components/PopularProducts/PopularProducts'
import Categories from '../components/Categories/Categories'


const Home = () => {
    
    return (
        <div>
            <ImageSlider/>  
            <PopularProducts/>
            <Categories/>
        </div>
    )
}

export default Home
