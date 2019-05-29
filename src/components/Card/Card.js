import React from 'react';
import { Card as BlueprintCard, Button, Slider, Intent } from '@blueprintjs/core';
import css from './Card.css';
// import Map from '../Map';

class Card extends React.Component {
  state = {
    value: 2.5
  };

  getChangeHandler = (key) => {
    return (value) => this.setState({ [key]: value });
  };

  renderData = (data) => {
    const keys = Object.keys(data);
    return keys.map((key) => {
      if (typeof data[key] === 'object') {
        return this.renderData(data[key]);
      }
      return (
        <ul>
          <li>
            {key} : {data[key]}
          </li>
        </ul>
      );
    });
  };

  renderCard = (nur) => {
    const { value } = this.state;
    return (
      <BlueprintCard
        elevation={2}
        className={css.nursery}
        style={{ margin: '5px', background: '#9DC183', fontWeight: 'bold' }}
        key={nur.id}
      >
        <div>
          {this.renderData(nur)}
          <div style={{ width: '40%' }}>
            <Slider
              min={0}
              max={10}
              stepSize={0.1}
              labelStepSize={10}
              disabled
              onChange={this.getChangeHandler('value')}
              value={value}
              vertical={false}
              className={css.slider}
            />
          </div>
        </div>
        <Button
          icon="more"
          text="Open"
          style={{
            float: 'right',
            backgroundColor: '#48aff0',
            color: 'white'
          }}
          onClick={() => (window.location.hash = '/details')}
        />
      </BlueprintCard>
    );
  };

  render() {
    const { nurseryDetails } = this.props;
    return nurseryDetails.map((nur) => {
      return this.renderCard(nur);
    });
  }
}

export default Card;
