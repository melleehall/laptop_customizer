import React, { Component } from 'react';
import Feature from '../Feature/Feature';
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

export default class MainForm extends Component {

    render () {
    
    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            <Feature 
                updateFeature={this.props.updateFeature}
                features={this.props.features}
                selected={this.props.selected}
            />
        </form>
    )

}}
