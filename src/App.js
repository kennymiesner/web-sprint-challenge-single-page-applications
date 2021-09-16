import React, { useState, useEffect } from "react";
// Import Route and Switch
import { Route, Switch } from 'react-router-dom'
// Import Header Component
import Header from './components/Header.js'
// Import Hero Component
import Hero from './components/Hero'
// Import Order Form Component
import Form from './components/Form'
// Import Schema
import schema from './validation/formSchema'
// Import Yup
import { reach } from 'yup'
// Import Axios
import axios from 'axios'
import './App.css'

// Initial States

const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  sausage: false,
  bacon: false,
  onion: false,
  special: '',
}

const initialFormErrors = {
  name: '',
  size: '',
  special: '',
}

const initialOrders = []
const initialDisabled = true

export default function App () {

  // States

  const [orders, setOrders] = useState(initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  // Helpers

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        setOrders([res.data, ...orders])
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  const validate = (name, value) => {
    reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors}))
  }

  // Event Handlers

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value, 
    })
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      pepperoni: formValues.pepperoni,
      sausage: formValues.sausage,
      bacon: formValues.bacon,
      onion: formValues.onion,
      special: formValues.special.trim(),
    }
    postNewOrder(newOrder)
  }

  // Side Effects

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <>
      <Header />
      <Switch>
        <Route path='/pizza'>
          <Form 
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
        <Route path='/'>
          <Hero />
        </Route>
      </Switch>
    </>
  );
};
