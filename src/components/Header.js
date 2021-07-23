import React from "react";
import { Link } from 'react-router-dom'
import '../App.css'

export default function Topbar() {
  return (
    <header>
      <Link to={'/'}>  
        <a id='logo'>Lambda Eats</a>
      </Link>
      <nav>
        <Link to={'/pizza'}>
          <a id='order-pizza'>Order Online &#127829;</a>
        </Link>
        <a href='#'>Contact</a>
      </nav>
    </header>
  )
}