import React from "react";
// Import Route and Switch
import { Route, Switch } from 'react-router-dom'
// Import Hero Component
import Hero from './components/Hero'
// Import Order Form Component
import Form from './components/Form'
import './App.css'

export default function App () {
  return (
    <Switch>
      <Route path='/pizza'>
        <Form />        
      </Route>
      <Route path='/'>
        <Hero />
      </Route>
    </Switch>
  );
};
