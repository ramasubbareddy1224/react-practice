import React from 'react';
import {
    Route,
    Switch
  } from 'react-router-dom'
import About from './About';
import Contact from './Contact';
import Dashboard from './Dashboard';
import User from './User';
import Employee from './Employee';

  export default ()=>(
      <Switch>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/user" component={User}></Route>
          <Route path="/employee" component={Employee}></Route>
      </Switch>
  )