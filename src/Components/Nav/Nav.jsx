import React from 'react'
import { NavLink } from 'react-router-dom'
// Components & Assets
import Logo from '../../assets/react-logo.png'
import Wallet from './Wallet'

const Nav = ({cash}) => {
  console.log(Logo)
  return (
    <nav className="navigation-bar">
    <NavLink id="logo" to="/" ><img src={Logo} alt="Logo"></img></NavLink>
    <Wallet cash={cash}/>
    <NavLink  to="/market" >Supermarket</NavLink>
    <NavLink to="burgers/">Burgers</NavLink>
    </nav>
  )
}

export default Nav