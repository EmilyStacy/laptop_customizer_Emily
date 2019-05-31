import React, { Component } from 'react';
import './FormList.css';
import ListItem from './ListItem/ListItem'
class FormList extends Component {
    render(){

      const listItems =Object.entries(this.props.features).map(([key,value]) => {
      const options = this.props.features[key].map((item, index) => {
      let isSelected = this.props.selected === value
      return (<ListItem key={key} featureName={key} item={item} options ={options}   
      handleClick={this.props.dealWithClick} isSelected ={isSelected}>
      </ListItem>)})});
        
        return(
       <ul className="feature__list">
        <div className="feature__item">
        {listItems}
        </div>
          </ul>
    )
}

}

export default FormList;