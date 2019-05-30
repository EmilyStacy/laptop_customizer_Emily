import React, { Component } from 'react';
import './Form.css';
import ListItem from './FormList/ListItem/ListItem';


class Form extends Component {

    const features = Object.keys(this.props.features)
    .map(key => {
      const options = this.props.features[key].map((item, index) => {
        const selectedClass = item.name === this.state.selected[key].name ? 'feature__selected' : '';
        const featureClass = 'feature__option ' + selectedClass;
        return (<li key={index} className="feature__item">
        <div className={featureClass}> </div></li>)});
 
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
            <ListItem key={this.props.features.index} name={this.props.features[key]}> { features } </ListItem>
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