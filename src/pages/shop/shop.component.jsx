import React from 'react';
import './shop.data.js'
import SHOP_DATA from './shop.data.js';


class ShopPage extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }

  render(){
    return(
      <div>
        <h1>SHOPZ</h1>
      </div>
    )
  }
}

export default ShopPage;