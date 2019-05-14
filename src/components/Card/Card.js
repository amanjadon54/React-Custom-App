import React from 'react';
import { Card as BlueprintCard, Button } from '@blueprintjs/core';
import css from './Card.css';
// import Map from '../Map';

const renderData = (data) => {
  const keys = Object.keys(data);
  return keys.map((key) => {
    if (typeof data[key] === 'object') {
      return renderData(data[key]);
    }
    return (
      <p style={{ color: 'black', display: 'inline-block' }}>
        <ul>
          <li>
            {key} : {data[key]}
          </li>
        </ul>
      </p>
    );
  });
};

const renderCard = (nur) => {
  return (
    <BlueprintCard
      elevation={2}
      className={css.nursery}
      style={{ padding: '5px', margin: '10px', background: 'grey', fontWeight: 'bold' }}
      key={nur.id}
    >
      {/* <Map /> */}
      {renderData(nur)}
      <Button
        icon="more"
        text="Open"
        style={{
          float: 'right',
          marginTop: '25px',
          marginBottom: '0px',
          backgroundColor: '#48aff0',
          color: 'white'
        }}
        onClick={() => (window.location.hash = '/details')}
      />
    </BlueprintCard>
  );
};

const Card = (props) => {
  const { nurseryDetails } = props;
  return nurseryDetails.map((nur) => {
    return renderCard(nur);
  });
};

export default Card;
