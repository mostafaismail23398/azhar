import React from 'react'
import a from '../Images/logo.png'
import './navbar.css'
import { Link, Outlet } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
<>
<nav class="navbar ">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src= {a} alt="Bootstrap" width="120" height="120"/>
    </a>
    
    <Link class="navbar-brand nav-content" to='header'>الرئيسية</Link>
    <Link class="navbar-brand nav-content" to='about'>تسجيل دخول </Link>
    <Link class="navbar-brand nav-content" to='/'>عن الكلية</Link>
  </div>
</nav>
<Outlet/>
</>
  </div>
  
    )
}

  


export default Navbar