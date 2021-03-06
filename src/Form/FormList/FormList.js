import React, { Component } from 'react';
import './FormList.css';
import ListItem from './ListItem/ListItem'

function checkisSelected (selected, computerPart, selectedPart) {
  return selected[computerPart].name === selectedPart
}
class FormList extends Component { 
  render(){
      const listItems =Object.entries(this.props.features).map(([computerPart,partOptions]) => {
        
      const options = Object.values(partOptions).map((part) => {
          let isSelected = checkisSelected(this.props.selected,computerPart, part)
          return (<ListItem key={part} featureName={computerPart} item={part}    
          handleClick={this.props.handleClick} isSelected ={isSelected} 
          >
        </ListItem>)})
        return <div><h1>{computerPart}</h1>{options}</div>;
      });
        
        return(
        <div className="feature__name">
       <ul className="feature__list">
        <div className="feature__item">
        {listItems}
        </div>
          </ul>
          </div>
    )
}

}

export default FormList;