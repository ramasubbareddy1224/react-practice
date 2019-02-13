import React, { Component } from 'react';

class User extends Component {
    constructor(props){
           super(props);
           this.state={
               email:"rama@gmail.com",
               pwd:"",
               color:"",
               agree:false,
               gender:"male"
           }
           this.onEmailChange=this.onEmailChange.bind(this);
           this.onColorChange=this.onColorChange.bind(this);
           this.onAgreeChange=this.onAgreeChange.bind(this);
           this.setGender=this.setGender.bind(this);

    }
    onEmailChange(event){
           this.setState({email:event.target.value});
    }
    onColorChange(event)
    {
        this.setState({color:event.target.value});
    }
    onAgreeChange(event)
    {
        this.setState({agree:event.target.checked});
    }
    setGender(event)
    {
this.setState({gender:event.target.value});
    }
  render() {
    return (
      <div>
 <div className="row">
<div className="col-md-offset-4 col-md-4">
   <form>
    <div className="form-group">
    <label htmlFor="email">Email address:</label>
    <input className="form-control" value={this.state.email} onChange={this.onEmailChange}></input>
  </div>
 <div className="form-group">
    <label htmlFor="pwd">Password:</label>
    <input type="password" className="form-control" value={this.state.pwd}></input>
  </div> 
  <div className="form-group">
  <label>
          Pick your favorite flavor:
          <select className="form-control" value={this.state.color} onChange={this.onColorChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
  </div>
  <div className="form-group">
  <label>
          Are you Agree: 
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.agree}
            onChange={this.onAgreeChange} />
        </label>
  </div>
  <div className="form-group">
  Gender:
        <div>
          <input type="radio" checked={this.state.gender == "male"} 
onClick={this.setGender} value="male" /> Male
          <input type="radio" checked={this.state.gender == "female"} 
onClick={this.setGender} value="female"  /> Female
        </div>
  </div>
  <button type="button" className="btn btn-default">Submit</button>
  </form>
          </div>
          </div>

          <p>email address: {this.state.email}</p>
   
      </div>
    );
  }
}

export default User;
