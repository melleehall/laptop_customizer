import React, { Component } from 'react';
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

export default class FeatureItem extends Component {
    render () {
        return (
            <div key={this.props.itemHash} className="feature__item">
                    <input
                        type='radio'
                        id={this.props.itemHash}
                        className='feature__option'
                        name={slugify(this.props.feature)}
                        checked={this.props.itemName === this.props.selected[this.props.feature].name}
                        onChange={e => this.props.updateFeature(this.props.feature, this.props.item)}
                    />
                    <label htmlFor={this.props.itemHash} className='feature__label'>
                        {this.props.itemName} ({USCurrencyFormat.format(this.props.itemCost)})
                    </label>
                </div>
        )
    }
}