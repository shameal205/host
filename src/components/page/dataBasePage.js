import React, { Component } from 'react';
import '../../index.css';

class DataBasePage extends Component{
  constructor(){
    super();
    this.state = {
      customers: []
    }
  }

  componentDidMount(){
    fetch('/api/data')
    .then(res => res.json())
    .then(customers => this.setState({customers}, () => console.log('Customers fetched..',
    customers)));
  }
  render(){
    return(
      <div>
        <h2 id='title'>Customers</h2>
        <ul>
          { this.state.customers.map(customer =>
          <li key={customer.id}>{customer.user} {customer.status}</li>
            )}
            </ul>
      </div>
    );
  }
}

export default DataBasePage;
