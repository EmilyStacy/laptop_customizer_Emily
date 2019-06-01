import React, { Component } from 'react';
import './App.css';
import Form from './Form/Form';
import Cards from './Cards/Cards';

const FEATURES = {
  "Processor": [
    {
      name: '17th Generation Intel Core HB (7 Core with donut spare)',
      cost: 700
    },
    {
      name: 'Professor X AMD Fire Breather with sidewinder technology',
      cost: 1200
    }
  ],
  "Operating System": [
    {
      name: 'Ubuntu Linux 16.04',
      cost: 200
    },
    {
      name: 'Bodhi Linux',
      cost: 300
    }
  ],
  "Video Card": [
    {
      name: 'Toyota Corolla 1.5v',
      cost: 1150.98
    },
    {
      name: 'Mind mild breeze 2000',
      cost: 1345
    }
  ],
  Display: [
    {
      name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
      cost: 1500
    },
    {
      name: '15.3" HGTV (3840 x 2160) Home makeover edition',
      cost: 1400
    },
  ]
};

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      selected: App.defaultProps.selected
       
      }
      this.updateFeature = this.updateFeature.bind(this);
    }

  updateFeature(feature, newValue) {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected:selected   
    });
  }

  render() {
  
    return (
      <div className="App">
        <header>
          <h1>ELF Computing</h1>
          <h3>Laptops</h3>
          <h5>Customize your laptop</h5>  
        </header>      
        <main>
       <div>  
      
      </div> 
          
          <Form features ={FEATURES} handleClick = {this.updateFeature} 
          selected={this.state.selected}> 
          
          </Form>
          <Cards selected ={this.state.selected} />
        </main>
      </div>
    );
  }
}

App.defaultProps = {
       selected: {
          "Processor": {
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
          "Display": {
              name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
              cost: 1500
            }
  
  }
  }

export default App;  
