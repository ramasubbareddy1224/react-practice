import React,{Component} from 'react'

class ApiTest extends Component {
    constructor(props){
          super(props);
          this.state={
              userList:[]
          }
    }

    componentDidMount()
    {
        fetch("https://randomuser.me/api?results=10")
        .then(res => res.json())
        .then(
          (data) => {
              console.log('da',data.results);
            this.setState({                
              userList: data.results
            });
          }
        )
    }
    render(){
        return(
                <ul>
                  {this.state.userList.map(item => (
                    <li>
                      <p>email :  {item.email} </p>
                      <p>Gender :  {item.gender}</p> 
                      <p>Phone : {item.phone}</p>
                    </li>
                  ))}
                </ul>
              );
    }
}
export default ApiTest;

const UserList= (user)=>{
    return <div>
        <p>{user.gender}</p>
    </div>
}