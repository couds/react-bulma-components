import React from 'react';
import { render } from 'react-testing-library';
import { Hero } from '..';
import CONSTANTS from '../../../constants';

describe('Hero component', () => {
  it.each([[Hero], [Hero.Head], [Hero.Body], [Hero.Footer]])('should render', Component => {
    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should concat classname in props with classname', () => {
    const { asFragment } = render(<Hero className="other-class this-is-a-test" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should use inline styles', () => {
    const { asFragment } = render(<Hero style={{ height: 250 }} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should use gradient style', () => {
    const { asFragment } = render(<Hero color="primary" gradient />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render Hero with hero head, body and footer', () => {
    const { asFragment } = render(
      <Hero size="fullheight" color="primary">
        <Hero.Head renderAs="header">
          <div className="bd-notification is-info">Header</div>
        </Hero.Head>
        <Hero.Body>Body</Hero.Body>
        <Hero.Footer renderAs="footer">
          <div className="bd-notification is-danger">Footer</div>
        </Hero.Footer>
      </Hero>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  Object.values(CONSTANTS.COLORS).map(color =>
    it(`Should use use color ${color}`, () => {
      const { asFragment } = render(
        <Hero color={color}>
          <p>Default</p>
        </Hero>
      );
      expect(asFragment()).toMatchSnapshot();
    })
  );
});
