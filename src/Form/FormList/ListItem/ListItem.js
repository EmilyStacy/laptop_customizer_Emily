import React, { Component } from 'react';
import './ListItem.css';



class ListItem extends Component {
//   constructor(props) {
//     super(props);
//     this.toggleClass= this.toggleClass.bind(this);
//     this.state = {
//       'feature__selected': false,
//     };
// }
// toggleClass() {
//     const currentState = this.state.active;
//     this.setState({ active: !currentState });
// };

    render(){
    
      //const selectedClass = this.props.isSelected === this.props.selected[key].name ? 'feature__selected' : '';
     const selectedClass = (this.props.isSelected ? 'feature__selected' : '');
     const featureClass = 'feature__option ' + selectedClass;
     console.log(this.props.isSelected)
    return(
    <div className ={featureClass} 
    onClick= {e=> this.props.handleClick(this.props.featureName, this.props.item)}>
    { this.props.item.name}
    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
      .format(this.props.item.cost) }) 
    </div>
       )
    }

}

export default ListItem;