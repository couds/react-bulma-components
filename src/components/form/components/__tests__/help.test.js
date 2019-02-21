import React from 'react';
import { render } from 'react-testing-library';
import { Help } from '../help';

describe('Help component', () => {
  it('should have help classname', () => {
    const { asFragment } = render(
      <Help>
        <p className="bd-notification is-success">
          <p>Default</p>
          <p>Container</p>
        </p>
      </Help>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should concat classname in props with Bulma classname', () => {
    const { asFragment } = render(
      <Help className="other-class this-is-a-test">
        <p>Default</p>
      </Help>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should use inline styles', () => {
    const { asFragment } = render(
      <Help style={{ height: 250 }}>
        <p>Default</p>
      </Help>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should be displayed as a successful message', () => {
    const { asFragment } = render(
      <Help color="success">
        <p>Default</p>
      </Help>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
