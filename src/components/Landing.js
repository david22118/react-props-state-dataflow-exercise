import React, { Component } from 'react';

class Landing extends Component {
    /* your code here */


    render() {
        return <div>
   {this.props.store.filter(s=>(s.hottest==true)).map(f=>(<div>Welcome,{this.props.user}.The hottest item is {f.item} for ${f.price} </div>)) }
        </div>

    }
}

export default Landing