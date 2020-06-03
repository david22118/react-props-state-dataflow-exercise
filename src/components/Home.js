import React, { Component } from 'react';
import Item from './Item';

class Home extends Component {
              

    render() {
        let newStore=this.props.store.map(s=>({item:s.item,price:s.price*(1-s.discount),disccount:s.disccount,hottest:s.hottest}))
        return <div>
       <Item   store={ this.props.shouldDiscount?newStore:this.props.store} />
       </div>
    }
}

export default Home