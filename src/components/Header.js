import React from "react";
import '../App.css'

export default function Topbar() {
  return (
    <header>
      <a href='/' id='logo'>Lambda Eats</a>
      <nav>
        <a href='/pizza' id='order-pizza'>Order Online &#127829;</a>
        <a href='#'>Contact</a>
      </nav>
    </header>
  )
}