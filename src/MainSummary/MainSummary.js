import React, { Component } from 'react';
import SummaryItem from '../SummaryItem/SummaryItem';

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

          const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
          );
        

        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}    
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {USCurrencyFormat.format(total)}
              </div>
            </div>
          </section>
        )
    }
}
