import React, { Component } from 'react';

class Item extends Component {
    render() {
        return <div>
            <h4>Store:</h4>
      {this.props.store.map((s,i)=>(<div key={i} >{s.item}:${s.price}</div>))}
      </div>
    }
}

export default Item