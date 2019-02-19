import React, {Component} from 'react'

class UserApi extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            userList:[]
        }
    }

    componentDidMount(){
        fetch('https://randomuser.me/api?results=10')
        .then(res=>res.json())
        .then(data=>{
            this.setState({userList:data.results});
        })
    }

    render(){
        return(
            <table>
                <tr>
                    <td>Gender</td>
                    <td>Email</td>
                    <td>Phone</td>
                </tr>
                {this.state.userList.map(user=>(
                    <tr>
                        <td>{user.gender}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                    </tr>
                ))}
             </table>
            // <ul>
            //     {this.state.userList.map(user=>(
            //         <li>
            //             {user.gender} - {user.email} - {user.phone}
            //         </li>
            //     ))}
            // </ul>
        )
    }

}
export default UserApi;