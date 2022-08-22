import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './/style.css'
import logo from '../images/logo.jpg'
const Navbar = () => {
    const[current,update] = useState(false)
  return (
    <>
    <nav className='navbar'>
        <nav className='leftnav'>
            <img src={logo} />
        </nav>
        <nav className={current? 'midnav-res':'midnav'}>
            <ul>
                <li className='items'><NavLink to='/'>Home</NavLink></li>
                <li className='items'><NavLink to='/mines'> Mines</NavLink></li>
                <li className='items'><NavLink to='/zoo'> Zoo</NavLink></li>
                <li className='items'><NavLink to='/park'>National Parks</NavLink></li>
                <li className='items'><NavLink to='/temples'>Temples</NavLink></li>
            </ul>
        <nav className={current?'rightnav-res':'rightnav'}>
            <NavLink to ='/review'>Review</NavLink>
        </nav>
        </nav>
        <button className='burger' onClick={()=> update(!current)}>
                  <div className='line'></div>
                  <div className='line'></div>
                  <div className='line'></div>
        </button>
    </nav>
    </>
  )
}


export default Navbar