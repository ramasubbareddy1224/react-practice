import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import {
  BrowserRouter ,
  Link
} from 'react-router-dom'
import Footer from './Footer';
import Routes from './Routes';
class Home extends Component {

  constructor(props)
  {
       super(props);
       /* state params  */
       this.state={
         company:"Harso",
         location:"Hyd",
         phonenum:121312121
       }
       this.clickUpdateStateButton = this.clickUpdateStateButton.bind(this);
       this.updateCompany=this.updateCompany.bind(this);

  } 
   clickUpdateStateButton(){
             this.setState(
                {
                 location:"Mumbai",
                 phonenum:989898989
                }
               );
   } 
   updateCompany(){
     this.setState({company:"Harsco India"});
   }  
  render() {
    return (
      <BrowserRouter>
      <div className="App"> 
        <Header company={this.state.company} location={this.state.location} phonenum={this.state.phonenum} companyChange={this.updateCompany} ></Header>
        <p style={{color:"red",backgroundColor:'yellow'}}>This is Home Component</p>
        <p style={PTageStyle}>This is Home2 Component</p>
        <button className="btn btn-primary" onClick={this.clickUpdateStateButton}>Update State</button>
        <Link  to='/about'>Go to About</Link>   
        <Link  to='/user'>Go to User</Link> 
        <Link to="/employee">Go to Employee Form</Link>     
        <Routes></Routes>
      </div>
      </BrowserRouter>
    );
  }
}

export default Home;

const PTageStyle={color:"red",backgroundColor:'yellow'}
