import React, { Component } from 'react';
import MainForm from './MainForm/MainForm';
import MainSummary from './MainSummary/MainSummary';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

import './App.css';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  // the currently selected LaptopComponentOptions are stored in state
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    console.log('hello')
    // saving the current selected state as a new object
    const selected = Object.assign({}, this.state.selected);
    // assign new key/value pair in the object for the selected LaptopComponentOption
    selected[feature] = newValue;
    // set the state with the new object
    this.setState({
      selected
    });
  };

  render () {
    return (
     <div className="App">
      <header>
        <h1>ELF Computing | Laptops</h1>
      </header>
      <main>
        <MainForm 
          updateFeature={this.updateFeature}
          features={this.props.features}
          selected={this.state.selected}/>
        <MainSummary 
          selected={this.state.selected}/>
      </main>
     </div>
    )
  }

}

export default App;
