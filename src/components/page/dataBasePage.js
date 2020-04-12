import React, { Component } from 'react';
import '../../index.css';

class DataBasePage extends Component{
  constructor(){
    super();
    this.state = {
      users: []
    }
  }

  // Calls localhost:5000
  // Pulls data from mysql
  componentDidMount(){
    fetch('/api/data')
    .then(res => res.json())
    .then(users => this.setState({users}, () => console.log('Customers fetched..',
    users)));
  }
  render(){
    // Displays the mysql data
    return(
      <div id="top">
        <h1 align="center">Users</h1>
        <ul id="top">
          { this.state.users.map(users =>
          <li key={users.id}><font size="+2"><b>{users.id}</b> &nbsp; {users.user} &nbsp;  {users.status}</font></li>
            )}
            </ul>
      </div>
    );
  }
}

export default DataBasePage;
