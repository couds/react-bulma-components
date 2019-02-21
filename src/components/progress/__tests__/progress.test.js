import React from 'react';
import renderer from 'react-test-renderer';
import { Progress } from '..';
import CONSTANTS from '../../../constants';

describe('Progress component', () => {
  it('should exist', () => {
    expect(Progress).toMatchSnapshot();
  });
  it('should have notification classname', () => {
    const component = renderer.create(<Progress value={30} max={100} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should concat classname in props with classname', () => {
    const component = renderer.create(<Progress value={30} max={100} className="other-class this-is-a-test" />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should use inline styles', () => {
    const component = renderer.create(<Progress value={30} max={100} style={{ width: 250 }} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should be Large', () => {
    const component = renderer.create(<Progress value={30} max={100} size="large" />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  Object.values(CONSTANTS.COLORS).map(color =>
    it(`Should use use color ${color}`, () => {
      const component = renderer.create(<Progress value={30} max={100} color={color} />);
      expect(component.toJSON()).toMatchSnapshot();
    })
  );
});
