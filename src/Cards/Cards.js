
import React, { Component } from 'react';
import './Cards.css';
import Card from './Card/Card';
const summary = Object.keys(this.state.selected)
        .map(key =>
            <Card
            className="summary__option" 
            key={key} 
            name={this.state.selected[key].name}
            cost= { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                .format(this.state.selected[key].cost)} /> ); 
class Cards extends Component {
    
    render(){
        return(
            <section className ="main__summary">
            <h3>NEW GREENLEAF 2018</h3>
            {summary} 
            </section>
          )
          }

        }

        export default Cards;