import React, { Component } from 'react';
import './Card.css';
class Card extends Component {
    render(){
        const total = Object.keys(this.state.selected)
           .reduce((acc, curr) => acc + this.state.selected[curr].cost, 0);
        return(
            <section className="summary">
            <div className="summary__option">
             <div className="summary__option__label">{this.props.key} </div>
             <div className="summary__option__value">{this.props.name}</div>
             <div className="summary__option__cost"> {this.props.cost} </div>
            </div>
            <div className="summary__total">
            <div className="summary__total__label">Your Price: </div>
            <div className="summary__total__value">
            {total}
            </div>
          </div>
          </section>
         
         );
    }
}

export default Card;