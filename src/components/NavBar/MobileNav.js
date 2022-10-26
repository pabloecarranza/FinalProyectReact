import React, { useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Grow } from '@mui/material';
import { NavLink } from 'react-router-dom';

const MobileNav = () => {
    const [activeNav, setActiveNav] = useState(false)

    return (
        <div className='mobile-nav'>

        {
            activeNav ?  <><CloseIcon onClick={ () => setActiveNav(!activeNav)}/> 
            <Grow in={activeNav}>
                <div className='menu-container'> 
                    <ul>
                        <li>
                            <NavLink className='link' to='/'
                            end={true} onClick={() => setActiveNav(!activeNav)}>
                                <h3 variant='contained' color='secondary'>Home</h3>
                            </NavLink>
                            </li>

                            <li>
                            <NavLink className='link' to="/category/all" onClick={() => setActiveNav(!activeNav)}>
                                <h3  variant='contained' color='secondary'>Products</h3>
                            </NavLink>
                            </li>
                            <li>
                            <NavLink className='link' to="/about" onClick={() => setActiveNav(!activeNav)}>
                                <h3   variant='contained' color='secondary'>About</h3>
                            </NavLink>
                        </li>
                    </ul>
                </div>
             </Grow></> :
            <MenuIcon onClick={ () => setActiveNav(!activeNav)} /> 

        }
        
        </div>
    
    )
    }

export default MobileNav