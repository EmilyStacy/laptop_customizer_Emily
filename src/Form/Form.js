import React, { Component } from 'react';
import './Form.css';
import FormList from './FormList/FormList';


class Form extends Component {

    render(){
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