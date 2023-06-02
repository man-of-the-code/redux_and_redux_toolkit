import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = () => {
  const items = useSelector(state => state.cart);
  return (
    <div className='navbar__position' >
    <div className='navbar'>
      <span>redux-demo</span>
      <div className='navbar__option'>
        <Link className='navbar__link' to = "/">Home</Link>
        <Link className='navbar__link' to = "/cart">Cart</Link>
        <span>Cart Item : {items.length}</span>
      </div>
    </div>
    </div>
  )
}

export default Navbar