import React from 'react';
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { NavLink } from 'react-router-dom';

const DesktopNav = () => {
  return (
  <div className='desktop-nav'>
      <ul>
          <ButtonGroup aria-label="text button group">
            <li>
              <NavLink className='link' to='/'
              end={true}>
                <Button variant='contained' color='secondary'>Home</Button>
              </NavLink>
            </li>

            <li>
               <NavLink className='link' to="/category/all">
                <Button variant='contained' color='secondary'>Products</Button>
              </NavLink>
            </li>

            <li>
              <NavLink className='link' to="/about">
                <Button  variant='contained' color='secondary'>About us</Button>
              </NavLink>
            </li>
          </ButtonGroup>
        </ul>
  </div>);
};

export default DesktopNav;
