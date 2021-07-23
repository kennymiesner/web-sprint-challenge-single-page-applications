import React from "react";
import { Link } from 'react-router-dom'
import '../App.css'

export default function Topbar() {
  return (
    <header>
      <Link to={'/'}>  
        <button id='logo'>Lambda Eats</button>
      </Link>
      <nav>
        <Link to={'/pizza'}>
          <button id='order-pizza'>Order Online &#127829;</button>
        </Link>
        <button>Contact</button>
      </nav>
    </header>
  )
}