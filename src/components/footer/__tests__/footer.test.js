import React from 'react';
import { render } from 'react-testing-library';
import { Footer } from '..';

describe('Footer component', () => {
  it('should render', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
