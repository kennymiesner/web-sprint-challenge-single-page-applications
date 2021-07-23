import React from "react";
import '../App.css'

export default function Form() {
  return (
    <section id='form-container'>
      <form id='pizza-form'>
        <h1>Build Your Own Pizza</h1>
        <div className='featured-image'></div>
        <label>Choice of Size<br/>
          <select id='size-dropdown'>
            <option>Small (9")</option>
            <option>Medium (12")</option>
            <option>Large (14")</option>
            <option>Extra Large (16")</option>
          </select>
        </label>
        <fieldset>
          <legend>Add Toppings</legend>
          <input 
            type='checkbox'
            id='pepperoni'
            name='pepperoni'
            value='Pepperoni'
          />
          <label htmlFor='pepperoni'>Pepperoni</label><br/>
          <input 
            type='checkbox'
            id='sausage'
            name='sausage'
            value='Sausage'
          />
          <label htmlFor='sausage'>Sausage</label><br/>
          <input 
            type='checkbox'
            id='canadian-bacon'
            name='canadian-bacon'
            value='Canadian Bacon'
          />
          <label htmlFor='canadian-bacon'>Canadian Bacon</label><br/>
          <input 
            type='checkbox'
            id='spicy-italian-sausage'
            name='spicy-italian-sausage'
            value='Spicy Italian Sausage'
          />
          <label htmlFor='spicy-italian-sausage'>Spicy Italian Sausage</label><br/>
        </fieldset>
        <fieldset>
          <legend>Contact Information</legend>
          <label>Full Name<br/>
            <input 
              id='name-input'
            />
          </label>
        </fieldset>
        <label>Special Instructions<br/>
          <input 
            type='text'
            id='special-text'
            name='special-text'
          />
        </label>
        <input 
          type='submit'
          value='Add to Order'
        />
      </form>
    </section>
  )
}
