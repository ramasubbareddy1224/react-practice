import React from 'react';
import {
    Route,
    Switch
  } from 'react-router-dom'
import About from './About';
import Contact from './Contact';
import Dashboard from './Dashboard';
import User from './User';

  export default ()=>(
      <Switch>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/user" component={User}></Route>
      </Switch>
  )