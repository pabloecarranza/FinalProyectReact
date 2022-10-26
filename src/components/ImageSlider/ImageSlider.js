import React from 'react'
import './ImageSlider.css'
import img3 from '../../assets/2.png'
import img1 from '../../assets/3.png'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Link } from 'react-router-dom'


function ImageSlider() {
    return (
      
      <Carousel className='main-slide' showThumbs={false}>
        <Link to='/product/97TC6qLyyA4uAb720Ib4'>
          <div className='slide'>
            <img className='slide-image' src={img1} alt='#'></img>
          </div>
          </Link>
        <Link to='/product/GoxDGonSyVsM9DIebFvP'>
          <div  className='slide'>
            <img  className='slide-image'  src={img3} alt='#'></img>
          </div>
          </Link>
      </Carousel>
    )
        }

export default ImageSlider
