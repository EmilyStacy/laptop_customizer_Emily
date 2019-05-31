import React, { Component } from 'react';
import './App.css';
import Form from './Form/Form';
import Cards from './Cards/Cards';

const FEATURES = {
  Processor: [
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
      selected: FEATURES
       
      }
    }

  updateFeature(feature, newValue) {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      // pulls out the variable of the name and save it in that key
      selected:selected   
    });
  }

  render() {
    // const summary = Object.keys(this.state.selected)
    //       .map(key => <div className="summary__option" key={key}>
    //         <div className="summary__option__label">{key}  </div>
    //         <div className="summary__option__value">{this.state.selected[key].name}</div>
    //         <div className="summary__option__cost">
    //           { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
    //               .format(this.state.selected[key].cost) }
    //         </div>
    //     </div>)

    // const total = Object.keys(this.state.selected)
    //       .reduce((acc, curr) => acc + this.state.selected[curr].cost, 0);    


    // const features = Object.keys(this.props.features)
    //       .map(key => {
    //         const options = this.props.features[key].map((item, index) => {
    //           const selectedClass = item.name === this.state.selected[key].name ? 'feature__selected' : '';
    //           const featureClass = 'feature__option ' + selectedClass;
    //           return <li key={index} className="feature__item">
    //             <div className={featureClass}
                  
    //               onClick={e => this.updateFeature(key, item)}>
    //                 { item.name }
    //                 ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
    //                   .format(item.cost) })
    //             </div>
    //           </li>
    //         });

    //         return (
    //         <div className="feature" key={key}>
    //           <div className="feature__name">{key}</div>
    //           <ul className="feature__list">
    //             { options }
    //           </ul>
    //         </div>
    //       });      
  
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
          
          <Form features ={FEATURES} handleClick = {this.props.updateFeature} selected={this.state.selected}> 
          
          </Form>
          <Cards selected ={this.state.selected} />
        </main>
      </div>
    );
  }
}


export default App;  
