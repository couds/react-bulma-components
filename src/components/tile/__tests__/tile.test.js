import React from 'react';
import renderer from 'react-test-renderer';
import { Tile } from '..';
import CONSTANTS from '../../../constants';

describe('Tile component', () => {
  it('should exist', () => {
    expect(Tile).toMatchSnapshot();
  });
  it('should have notification classname', () => {
    const component = renderer.create(
      <Tile>
        <img alt="placeholder" src="http://bulma.io/images/placeholders/128x128.png" />
      </Tile>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should concat classname in props with Bulma classname', () => {
    const component = renderer.create(
      <Tile className="other-class this-is-a-test">
        <p>Default</p>
      </Tile>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should use inline styles', () => {
    const component = renderer.create(
      <Tile style={{ height: 250 }}>
        <p>Default</p>
      </Tile>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should render as Section', () => {
    const component = renderer.create(
      <Tile renderAs="section">
        <p>Default</p>
      </Tile>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  Object.values(CONSTANTS.COLORS).map(color =>
    it(`Should use use color ${color}`, () => {
      const component = renderer.create(
        <Tile notification color={color}>
          <p>Default</p>
        </Tile>
      );
      expect(component.toJSON()).toMatchSnapshot();
    })
  );
});
