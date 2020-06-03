import React, { Component } from 'react';

class Register extends Component {
  render() {
    return (
      <div>
       <h3>You cannot reserve during these times:</h3> 
      {this.props.reservations.map(r=> ( <div id="register">
     {r.day}@{r.time}

     </div>))}
     </div>
    )
  }
}

export default Register