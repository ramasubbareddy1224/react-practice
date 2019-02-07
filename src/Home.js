import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';

let phone=121312121
class Home extends Component {
    
  render() {
    return (
      <div className="App">
        <Header company="Harsco" location="Hyd" phonenum={phone}></Header>
        <p>This is Home Component</p>
      </div>
    );
  }
}

export default Home;
