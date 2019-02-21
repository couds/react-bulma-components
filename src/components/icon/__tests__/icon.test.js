import React from 'react';
import { render } from 'react-testing-library';
import { Icon } from '..';

describe('Icon component', () => {
  it('should render', () => {
    const { asFragment } = render(<Icon icon="bars" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should concat classname in props with classname', () => {
    const { asFragment } = render(<Icon icon="bars" className="other-class" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
