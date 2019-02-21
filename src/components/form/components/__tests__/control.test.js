import React from 'react';
import { render } from 'react-testing-library';
import { Control } from '../control';

describe('Control component', () => {
  it('should render', () => {
    const { asFragment } = render(<Control />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should concat classname in props with classname', () => {
    const { asFragment } = render(
      <Control className="other-class this-is-a-test">
        <p>Default</p>
      </Control>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should use inline styles', () => {
    const { asFragment } = render(
      <Control style={{ height: 250 }}>
        <p>Default</p>
      </Control>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render as a html section element', () => {
    const { asFragment } = render(
      <Control renderAs="section">
        <p>Default</p>
      </Control>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should be fullwidth, loading and size = large', () => {
    const { asFragment } = render(
      <Control fullwidth loading size="large">
        <p>Default</p>
      </Control>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
