import React from 'react';
import { render } from 'react-testing-library';
import { Content } from '..';

describe('Content component', () => {
  it('should render', () => {
    const { asFragment } = render(<Content />);
    expect(asFragment()).toMatchSnapshot();
  });
});
