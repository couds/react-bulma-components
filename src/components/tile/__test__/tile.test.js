import React from 'react';
import renderer from 'react-test-renderer';
import Tile from '..';
import CONSTANTS from '../../../constants';

describe('Tile component', () => {
  it('Should exist', () => {
    expect(Tile).toMatchSnapshot();
  });
  it('Should have notification classname', () => {
    const component = renderer.create(
      <Tile>
        <img
          alt="placeholder"
          src="http://bulma.io/images/placeholders/128x128.png"
        />
      </Tile>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should concat classname in props with Bulma classname', () => {
    const component = renderer.create(
      <Tile className="other-class this-is-a-test">
        <p>Default</p>
      </Tile>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should use inline styles', () => {
    const component = renderer.create(
      <Tile style={{ height: 250 }}>
        <p>Default</p>
      </Tile>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should render as Section', () => {
    const component = renderer.create(
      <Tile renderAs="section">
        <p>Default</p>
      </Tile>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  [null]
    .concat(Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]))
    .map(color =>
      it(`Should use use color ${color}`, () => {
        const component = renderer.create(
          <Tile notification color={color}>
            <p>Default</p>
          </Tile>,
        );
        expect(component.toJSON()).toMatchSnapshot();
      }),
    );
});
