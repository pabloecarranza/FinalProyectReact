import React from 'react';
import './NotFound.css'
import image from '../../assets/notfound.svg'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import ArrowBackIos from '@mui/icons-material/ArrowBackIos';

export const NotFound = () => {
  return <div className='notfound-container'>
    
      <img src={image} alt='page not found' />

      <Link className='link' to='/'>
          <Button variant='outlined'><ArrowBackIos />  Return to home</Button>
      </Link>
      
        </div>;
};
