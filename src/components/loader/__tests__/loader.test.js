import React from 'react';
import { render } from 'react-testing-library';
import { Loader } from '../loader';

describe('Loader component', () => {
  it('should render', () => {
    const { asFragment } = render(<Loader />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should concat classname in props with classname', () => {
    const { asFragment } = render(<Loader className="other-class test" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render as an html section', () => {
    const { asFragment } = render(<Loader renderAs="section" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should have custom inline styles', () => {
    const { asFragment } = render(<Loader renderAs="section" style={{ width: 200, zIndex: 1 }} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
