import React, { Component } from 'react';
import SummaryItem from '../SummaryItem/SummaryItem';
import Total from '../Total/Total';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

export default class MainSummary extends Component {
    render () {

      const selectedObj = this.props.selected;

      const summary = Object.keys(selectedObj).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = selectedObj[feature];
            const price = USCurrencyFormat.format(selectedOption.cost)
            return (
              <SummaryItem 
                featureHash={featureHash}
                key={featureHash}
                feature={feature}
                selectedOptionName={selectedOption.name}
                selectedOptionCost={price}
                />
            );
          });
        

        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}    
                <Total  
                selected={this.props.selected}/> 
          </section>
        )
    }
}
