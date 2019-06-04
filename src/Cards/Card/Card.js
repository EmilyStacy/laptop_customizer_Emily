import React, { Component } from 'react';
import './Card.css';
class Card extends Component {
    render(){
        return(
            <section className="summary" key={this.props.key}>
            <div className="summary__option">
             <div className="summary__option__label">{this.props.key} </div>
             <div className="summary__option__value">{this.props.name}</div>
             <div className="summary__option__cost"> {this.props.cost} </div>
            </div>
          </section>
         
         );
    }
}

export default Card;