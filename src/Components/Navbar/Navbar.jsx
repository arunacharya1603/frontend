import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import nav_dropdown from '../Assests/breadcrum_arrow.png';
import { CiMenuKebab } from "react-icons/ci";

import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    const {getTotalCartitems} = useContext(ShopContext);

    const menuRef = useRef();
    const dropdown_toggle = (e) =>{
      menuRef.current.classList.toggle('nav-menu-visible')
      e.target.classList.toggle('open');
    }


  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      {/* <img className='nav-dropdown' onClick={dropdown_toggle} src={} alt="" /> */}
      <CiMenuKebab className='nav-dropdown' onClick={dropdown_toggle}/>
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() =>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={() =>{setMenu("mens")}}><Link style={{textDecoration: 'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={() =>{setMenu("womens")}}><Link style={{textDecoration: 'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={() =>{setMenu("kids")}}><Link style={{textDecoration: 'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        <li onClick={() =>{setMenu("login")}}><Link style={{textDecoration: 'none'}} to='/login'>Login</Link>{menu==="login"?<hr/>:<></>}</li>
        <li onClick={() =>{setMenu("cart")}}><Link style={{textDecoration: 'none'}} to='/cart'>Cart</Link>{menu==="cart"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartitems()}</div>
      </div>
    </div>
  )
}

export default Navbar
