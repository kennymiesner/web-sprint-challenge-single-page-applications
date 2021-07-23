import React from "react";
import { Link } from 'react-router-dom'
// Import Header Component
import Header from './Header.js'
import '../App.css'

export default function Hero() {
  return (
    <>
    <Header />
    <section id="hero">
      <h1>Your Favorite Food, Delivered While Coding</h1>
      <Link to={'/pizza'}>
        <button id="order-pizza">Order Online &#127829;</button>
      </Link>
    </section>
    </>
  )
}
