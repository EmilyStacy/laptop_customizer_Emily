
import React, { Component } from 'react';
import './Cards.css';
import Card from './Card/Card';

class Cards extends Component {
    
    render(){
        // be modified
        const total = Object.values(this.props.selected)
           .reduce((acc, curr) => acc + curr.cost, 0);
        console.log(this.props.selected)
        console.log(this.props)
        console.log(Object.values(this.props.selected))
        const summary = Object.keys(this.props.selected).map(key =>
        //console.log('Whatever you want',key) &&
            <Card
            className="summary__option" 
            
            key={key}
            name={this.props.selected[key].name}
            cost= { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                .format(this.props.selected[key].cost)} 
            cost2 = {this.props.selected[key].cost} /> ); 
            
        return(
            <section className ="main__summary">
            <h3>NEW GREENLEAF 2018</h3>
            {summary} 
            <div className="summary__total">
            <div className="summary__total__label">Your Price: </div>
            <div className="summary__total__value">
            {total}
            </div>
          </div>
            </section>
          )
          }
          
        }

        export default Cards;