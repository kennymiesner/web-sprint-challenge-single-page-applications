import React from "react";
// Import Header Component
import Header from './Header.js'
import '../App.css'

export default function Form() {
  return (
    <>
    <Header />
      <section id='form-wrapper'>
        <div class='container'>
          <h1>Build Your Own Pizza</h1>
          <div className='featured-image'></div>
          <form id='pizza-form'>
            <fieldset>
              <legend>Choice of Size</legend>
              <label>
                <select id='size-dropdown'>
                  <option value=''>--Select Size--</option>
                  <option value='small'>Small (9")</option>
                  <option value='medium'>Medium (12")</option>
                  <option value='large'>Large (14")</option>
                  <option value='extra-large'>Extra Large (16")</option>
                </select>
              </label>
            </fieldset>
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
              <legend>Special Instructions</legend>
              <label>
                <input 
                  type='text'
                  id='special-input'
                  name='special-input'
                />
              </label>
            </fieldset>
            <fieldset>
              <legend>Contact Information</legend>
              <label>Full Name<br/>
                <input 
                  id='name-input'
                  name='name'
                />
              </label>
            </fieldset>
            <input 
              type='submit'
              value='Add to Order'
            />
          </form>
        </div>
      </section>
    </>
  )
}
