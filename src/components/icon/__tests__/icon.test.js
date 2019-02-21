import React from 'react';
import { render } from 'react-testing-library';
import { Icon } from '..';

describe('Icon component', () => {
  it('should have box classname', () => {
    const { asFragment } = render(<Icon icon="bars" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should concat Bulma class with classes in props', () => {
    const { asFragment } = render(<Icon icon="bars" className="other-class" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
