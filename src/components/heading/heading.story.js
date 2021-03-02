import React from 'react';
import Heading from './heading';

const HEADING_SIZES = [1, 2, 3, 4, 5, 6];

export const BasicUsage = () => (
  <>
    <Heading>Title</Heading>
    <Heading subtitle>Subtitle</Heading>
  </>
);

export const HeadingSizes = () => (
  <>
    {HEADING_SIZES.map((size) => (
      <Heading key={size} size={size}>
        Heading {size}
      </Heading>
    ))}
  </>
);

export const SubheadingSizes = () => (
  <>
    {HEADING_SIZES.map((size) => (
      <Heading subtitle key={size} size={size}>
        Subtitle {size}
      </Heading>
    ))}
  </>
);
