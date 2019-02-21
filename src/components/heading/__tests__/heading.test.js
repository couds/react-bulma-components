import React from 'react';
import { render } from 'react-testing-library';
import { Heading } from '..';

describe('Heading component', () => {
  it('should render', () => {
    const { asFragment } = render(<Heading />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should concat classname in props with classname', () => {
    const { asFragment } = render(<Heading className="other-class this-is-a-test" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should use inline styles', () => {
    const { asFragment } = render(<Heading style={{ height: 250 }} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should be a subtitle with size rendered as P', () => {
    const { asFragment } = render(
      <Heading size={3} subtitle renderAs="p">
        Subtitle
      </Heading>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should not be spaced because is subtitle', () => {
    const { asFragment } = render(
      <Heading spaced subtitle renderAs="p">
        Subtitle
      </Heading>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should be spaced', () => {
    const { asFragment } = render(
      <Heading spaced renderAs="p">
        Subtitle
      </Heading>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
