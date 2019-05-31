import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {
    render(){
      const selectedClass = this.props.isSelected ? 'feature__selected' : '';
      const featureClass = 'feature__option ' + selectedClass;
      
    return(
    
    <div className ={featureClass} 
    onClick={e=> this.props.handleClick(this.props.featureName, this.props.item)}>
    { this.props.item.name}
    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
      .format(this.props.item.cost) })> 
    </div>
      
    
       )
    }

}

export default ListItem;