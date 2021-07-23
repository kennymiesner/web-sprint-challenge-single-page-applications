import React from 'react'

export default function NewOrder({ details }) {
  if (!details) {
    return <h3>Working on fetching your new order&apos;s details...</h3>
  }

  return (
    <div className='order container'>
      <h2>Name: {details.name}</h2>
      <p>Size: {details.size}</p>
      <p>Topping1: {details.pepperoni}</p>
      <p>Topping2: {details.sausage}</p>
      <p>Topping3: {details.bacon}</p>
      <p>Topping4: {details.onion}</p>
      <p>Special: {details.special}</p>
    </div>
  )
}
