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
                id='size-dropdown'
                name='size'
                value={values.size}
                onChange={onChange}
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
              id='pepperoni'
              name='pepperoni'
              value={values.pepperoni}
              onChange={onChange}
            />
            <label htmlFor='pepperoni'>Pepperoni</label><br/>
            <input 
              type='checkbox'
              id='sausage'
              name='sausage'
              value={values.sausage}
              onChange={onChange}
            />
            <label htmlFor='sausage'>Sausage</label><br/>
            <input 
              type='checkbox'
              id='bacon'
              name='bacon'
              value={values.bacon}
              onChange={onChange}
            />
            <label htmlFor='bacon'>Bacon</label><br/>
            <input 
              type='checkbox'
              id='onion'
              name='onion'
              value={values.onion}
              onChange={onChange}
            />
            <label htmlFor='onion'>Onion</label><br/>
          </fieldset>
          <fieldset>
            <legend>Special Instructions</legend>
            <label>
              <input 
                type='text'
                id='special-text'
                name='special'
                value={values.special}
                onChange={onChange}
              />
            </label>
          </fieldset>
          <fieldset>
            <legend>Contact Information</legend>
            <label>Full Name<br/>
              <input 
                type='text'
                value={values.name}
                onChange={onChange}
                id='name-input'
                name='name'
              />
            </label>
          </fieldset>
          <input 
            disabled={disabled}
            type='submit'
            id='order-button'
            value='Submit Order'
          />
        </form>
      </div>
    </section>
  )
}
