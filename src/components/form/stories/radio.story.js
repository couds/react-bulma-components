import React, { useState } from 'react';
import { Form } from '../../..';

export const BasicUsage = () => {
  const [selectedValue, setSelectedValue] = useState('yes');
  return (
    <Form.Control>
      <Form.Radio
        value="yes"
        checked={selectedValue === 'yes'}
        onChange={(e) => setSelectedValue(e.target.value)}
      >
        Yes
      </Form.Radio>
      <Form.Radio
        value="no"
        checked={selectedValue === 'no'}
        onChange={(e) => setSelectedValue(e.target.value)}
      >
        No
      </Form.Radio>
      <Form.Radio disabled>I am disabled</Form.Radio>
    </Form.Control>
  );
};
