import React, { Component } from 'react';
import './FormList.css';
import ListItem from './ListItem/ListItem'

function checkisSelected (selected,partOptions){  
  console.log(selected.name,partOptions.name);
  return selected.name === partOptions.name;
};
class FormList extends Component { 
  
  render(){
       console.log(this.props.selected);
      const listItems =Object.entries(this.props.features).map(([computerPart,partOptions]) => {
      const options = Object.values(partOptions).map((part) => { 
      let isSelected = checkisSelected(this.props.selected[computerPart], part)
      console.log(isSelected)
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