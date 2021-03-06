import React, { Component } from 'react';
import FeatureItem from '../FeatureItem/FeatureItem';
import slugify from 'slugify';

export default class Feature extends Component {
    render() {
    
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      console.log(feature);
      const options = this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        console.log(itemHash);
        return (
          <div>
          <FeatureItem 
            itemHash={itemHash}
            key={itemHash}
            feature={feature}
            selected={this.props.selected}
            updateFeature={this.props.updateFeature}
            item={item}
            itemName={item.name}
            itemCost={item.cost} />
            </div>
        )
      })
      return (
        <fieldset className='feature' key={featureHash}>
        <legend className='feature__name'>
            <h3>{feature}</h3>
        </legend>
          {options}
      </fieldset>
    )});
     
    return (
        <div>
          {features}
        </div>
    )
 
  }
}
