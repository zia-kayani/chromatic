import React from 'react';
import './Card.css';

export const Card = ({ title, description, highlighted }) => {
  return (
    <div className={`card ${highlighted ? 'card-highlighted' : ''}`}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
