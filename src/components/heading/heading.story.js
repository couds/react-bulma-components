/* eslint-disable react/prop-types */
import React from 'react';
import Heading from './heading';

export const Default = ({ titleSize, titleWeight, spaced }) => {
  return (
    <>
      <Heading spaced={spaced} size={titleSize} weight={titleWeight}>
        Title
      </Heading>
      <Heading subtitle>Subtitle</Heading>
    </>
  );
};

Default.argTypes = {
  titleSize: {
    name: 'size',
    table: {
      category: 'Title',
    },
    control: {
      type: 'select',
      options: ['default', 1, 2, 3, 4, 5, 6],
    },
  },
  titleWeight: {
    name: 'weight',
    table: {
      category: 'Title',
    },
    control: {
      type: 'select',
      options: ['default', 'light', 'normal', 'semibold', 'bold'],
    },
  },
  spaced: {
    table: {
      category: 'Title',
    },
    control: {
      type: 'boolean',
    },
  },
};
