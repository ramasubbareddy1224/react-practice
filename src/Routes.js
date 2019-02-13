import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
  } from 'react-router-dom'
import About from './About';

  export default ()=>(
      <Switch>
          <Route path="/about" component={About}></Route>
      </Switch>
  )