import React from 'react';
import { Card as BlueprintCard } from '@blueprintjs/core';
import css from './Card.css';
import Map from '../Map';

const renderData = (data) => {
  const keys = Object.keys(data);
  return keys.map((key) => {
    if (typeof data[key] === 'object') {
      return renderData(data[key]);
    }
    return (
      <p style={{ color: 'black' }}>
        {key} : {data[key]}
      </p>
    );
  });
};

const renderCard = (nur) => {
  return (
    <BlueprintCard
      elevation={2}
      className={css.nursery}
      style={{ padding: '5px', margin: '10px' }}
      key={nur.id}
    >
      <Map />
      {renderData(nur)}
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
