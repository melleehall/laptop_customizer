import React, { Component } from 'react';

export default class SummaryItem extends Component {
    render () {
        return (
            <div className="summary__option" key={this.props.featureHash}>
                <div className="summary__option__label">{this.props.feature} </div>
                <div className="summary__option__value">{this.props.selectedOptionName}</div>
                <div className="summary__option__cost">
                  {this.props.selectedOptionCost}
                </div>
              </div>
        )
    }
}