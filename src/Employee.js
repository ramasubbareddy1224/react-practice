import React,{Component} from 'react'

class Employee extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            email:"rama@gmail.com",
            pwd:"",
            selectedColor:"green",
            agreeChecked:true,
            gender:"male"
        }
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onColorChange = this.onColorChange.bind(this);
        this.onAgreeChange=this.onAgreeChange.bind(this);
        this.setGender=this.setGender.bind(this);
    }
    onEmailChange(event){
          this.setState(
              {
                  email:event.target.value
               }
             );
    }
    onPasswordChange(event){
        this.setState(
            {
                pwd:event.target.value
             }
           );
  }
  onColorChange(event){
    this.setState(
        {
            selectedColor:event.target.value
         }
       );
}
onAgreeChange(event)
{
    this.setState(
        {
            agreeChecked:event.target.checked
         }
       );
}
setGender(event)
{
    this.setState({
        gender:event.target.value
    })
}

    render(){
        return (
            <div>
              <div className="row">

              <div className="col-md-4">

                <div className="form-group">
                        <label>Email Address</label>
                        <input type="text" className="form-control" value={this.state.email} onChange={this.onEmailChange}></input>
                </div>

                <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" value={this.state.pwd} onChange={this.onPasswordChange}></input>
                </div>

                <div className="form-group">
                        <label>Favorite Color</label>
                        <select value={this.state.selectedColor} onChange={this.onColorChange}>
                            <option value="red">Red</option>
                            <option value="green">Green</option>
                            <option value="blue">Blue</option>
                        </select>
                </div>

                <div className="form-group">
                        <label>Do you agree</label>
                        <input type="checkbox" checked={this.state.agreeChecked} onChange={this.onAgreeChange}></input>
                </div>

                <div className="form-group">
                        <label>Choose Gender</label>
                        <input type="radio" checked={this.state.gender == "male"} 
                                     value="male" onClick={this.setGender} /> Male

                        <input type="radio" checked={this.state.gender == "female"} 
                                     value="female" onClick={this.setGender} /> Female             
                </div>



              </div>
              </div>

<div> state values:
    <p>email : {this.state.email}</p>
    <p>pwd : {this.state.pwd}</p>
    <p>selected Color : {this.state.selectedColor}</p>
    <p>Do you Agree : {JSON.stringify(this.state.agreeChecked)}</p>
    <p>Gender : {this.state.gender}</p>
</div>
            </div>
        )
    }

}
export default Employee;
