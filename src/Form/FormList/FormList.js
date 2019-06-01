import React, { Component } from 'react';
import './FormList.css';
import ListItem from './ListItem/ListItem'
class FormList extends Component { 
  render(){
    console.log(listItems) 
    console.log(this.props.handleClick)
    // const entries =Object.entries(this.props.features)
      const listItems =Object.entries(this.props.features).map(([key,value]) => {
        const options = Object.values(this.props.features[key]).map((item, index) => {
          //let isSelected = this.props.selected === value
          let isSelected = true;
          return (<ListItem key={key} featureName={key} item={item} options ={options}   
          handleClick={this.props.handleClick} isSelected ={isSelected} 
          >
        </ListItem>)})
        return options;
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