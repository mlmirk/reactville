import React from 'react'
import { NavLink } from 'react-router-dom'
// Components & Assets
import Logo from '../../assets/react-logo.png'

const Nav = () => {
  console.log(Logo)
  return (
    <nav className="navigation-bar">
    <NavLink id="logo" to="/" ><img src={Logo} alt="Logo"></img></NavLink>
    <NavLink to="burgers/">Burgers</NavLink>
    </nav>
  )
}

export default Nav