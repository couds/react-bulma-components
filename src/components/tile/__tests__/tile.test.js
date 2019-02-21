import React from 'react';
import { render } from 'react-testing-library';
import { Tile } from '..';
import CONSTANTS from '../../../constants';

describe('Tile component', () => {
  it('should render', () => {
    const { asFragment } = render(
      <Tile>
        <img alt="placeholder" src="http://bulma.io/images/placeholders/128x128.png" />
      </Tile>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should concat classname in props with classname', () => {
    const { asFragment } = render(<Tile className="other-class this-is-a-test" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should use inline styles', () => {
    const { asFragment } = render(
      <Tile style={{ height: 250 }}>
        <p>Default</p>
      </Tile>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render as Section', () => {
    const { asFragment } = render(
      <Tile renderAs="section">
        <p>Default</p>
      </Tile>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  Object.values(CONSTANTS.COLORS)
    .filter(c => c)
    .map(color =>
      it(`Should use use color ${color}`, () => {
        const { container } = render(
          <Tile notification color={color}>
            <p>Default</p>
          </Tile>
        );
        expect(container.firstChild).toHaveClass(`is-${color}`);
      })
    );
});
