import React from 'react';
import { Card } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
};

export const Default = () => (
  <Card title="Card Title" description="This is a default card." />
);

export const Highlighted = () => (
  <Card title="Card Title" description="This card is highlighted." highlighted />
);
