import React, { Component } from 'react';
import './ListItem.css';
class ListItem extends Component {
    render(){
    const features = Object.keys(this.props.features)
    .map(key => {
      const options = this.props.features[key].map((item, index) => {
        const selectedClass = item.name === this.state.selected[key].name ? 'feature__selected' : '';
        const featureClass = 'feature__option ' + selectedClass;
        return (<ListItem key={index} options ={options} className={featureClass} features ={features} dealWithClick={this.props.dealWithClick}>
        </ListItem>)})});
        
        return(
       <ul className="feature__list">
        <div className="feature__item">
        {features}
        </div>
          </ul>
    )
}

}

export default ListItem;