import Article from "./Article";
import React, { Component } from 'react';

class Wardrobe extends Component {
  render() {
    let wardrobe = [
      { type: "shirt", color: "red", size: "Medium" ,number:1},
      { type: "shirt", color: "blue", size: "Medium",number:2 },
      { type: "pants", color: "blue", size: "Medium",number:3 },
      { type: "accessory", color: "sapphire", size: "",number:4 },
      { type: "accessory", color: "lilac", size: "",number:5 },
    ]

    return wardrobe.map(w=>(<Article key={w.number}  type={w.type} color={w.color} size={w.size} />))

  }
}

export default Wardrobe