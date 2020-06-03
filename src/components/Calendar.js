import React, { Component } from 'react';

class Calendar extends Component {
  render() {
    return (
      <div>
      <h3>Calendar :</h3>
    {this.props.reservations.map(r=> ( <div id="calendar">
       {r.name} has reservation on {r.day}@{r.time}

      </div>))}
      </div>
    )
  }
}

export default Calendar