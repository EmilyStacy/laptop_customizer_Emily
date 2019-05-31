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
      
        return (
            <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            <FormList  
            handleClick = {this.props.updateFeature}  
            className={this.props.featureClass} features = { this.props.features } selected={this.props.selected}/> 
          </section>
        )
    }
}

Form.defaultProps = {
    selected: {
        Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
        "Operating System": {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
        "Video Card":{
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
        Display: {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          }

}
}

export default Form