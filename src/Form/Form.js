import React, { Component } from 'react';
import './Form.css';
import FormList from './FormList/FormList';


class Form extends Component {
 
    //            <div className={featureClass}
                  
    //               onClick={e => this.updateFeature(key, item)}>
    //                 { item.name }
    //                 ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
    //                   .format(item.cost) })
    //             </div>
    //           </li>
    //         });


    render(){
        console.log(this.props.handleClick)
        console.log(this.props.features)
        return (
            <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            <FormList  
            handleClick = {this.props.handleClick}  
            className={this.props.featureClass} features = { this.props.features } 
            selected={this.props.selected}> {} </FormList>
          </section>
        )
    }
}



export default Form