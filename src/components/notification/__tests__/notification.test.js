import React from 'react';
import renderer from 'react-test-renderer';
import { Notification } from '..';
import CONSTANTS from '../../../constants';

describe('Notification component', () => {
  it('should exist', () => {
    expect(Notification).toMatchSnapshot();
  });
  it('should have notification classname', () => {
    const component = renderer.create(
      <Notification>
        <img alt="placeholder" src="http://bulma.io/images/placeholders/128x128.png" />
      </Notification>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should concat classname in props with classname', () => {
    const component = renderer.create(
      <Notification className="other-class this-is-a-test">
        <p>Default</p>
      </Notification>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should use inline styles', () => {
    const component = renderer.create(
      <Notification style={{ height: 250 }}>
        <p>Default</p>
      </Notification>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should render as Section', () => {
    const component = renderer.create(
      <Notification renderAs="section">
        <p>Default</p>
      </Notification>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  Object.values(CONSTANTS.COLORS).map(color =>
    it(`Should use use color ${color}`, () => {
      const component = renderer.create(
        <Notification color={color}>
          <p>Default</p>
        </Notification>
      );
      expect(component.toJSON()).toMatchSnapshot();
    })
  );
});
