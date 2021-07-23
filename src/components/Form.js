import React from "react";
import '../App.css'

export default function Form(props) {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
  } = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    const { name, value, type, checked } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value
    change(name, valueToUse)
  }

  return (
    <section id='form-wrapper'>
      <div class='container'>
        <h1>Build Your Own Pizza</h1>
        <div className='featured-image'></div>
        <form id='pizza-form' onSubmit={onSubmit}>
          <div className='errors'>
            <div>{errors.name}</div>
          </div>
          <fieldset>
            <legend>Choice of Size</legend>
            <label>
              <select
                onChange={onChange}
                value={values.size}
                name='size'
                id='size-dropdown'
              >
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
              onChange={onChange}
              value={values.pepperoni}
              name='pepperoni'
              id='pepperoni'
            />
            <label htmlFor='pepperoni'>Pepperoni</label><br/>
            <input 
              type='checkbox'
              onChange={onChange}
              value={values.sausage}
              name='sausage'
              id='sausage'
            />
            <label htmlFor='sausage'>Sausage</label><br/>
            <input 
              type='checkbox'
              onChange={onChange}
              value={values.bacon}
              name='bacon'
              id='bacon'
            />
            <label htmlFor='bacon'>Bacon</label><br/>
            <input 
              type='checkbox'
              onChange={onChange}
              value={values.onion}
              name='onion'
              id='onion'
            />
            <label htmlFor='onion'>Onion</label><br/>
          </fieldset>
          <fieldset>
            <legend>Special Instructions</legend>
            <label>
              <input 
                onChange={onChange}
                value={values.special}
                name='special'
                type='text'
                id='special-text'
              />
            </label>
          </fieldset>
          <fieldset>
            <legend>Contact Information</legend>
            <label>Full Name<br/>
              <input 
                onChange={onChange}
                value={values.name}
                name='name'
                type='text'
                id='name-input'
              />
            </label>
          </fieldset>
          <button id='submitBtn' disabled={disabled}>Place Order</button>
        </form>
      </div>
    </section>
  )
}
