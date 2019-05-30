import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {
    render(){
    return(
    <div className ={featureClass} onClick={e => this.dealWithClick(key, item)}>
    { item.name }
    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
      .format(item.cost) })> </div>
    
       )
    }

}

export default ListItem;