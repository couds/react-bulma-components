import React from 'react';
import renderer from 'react-test-renderer';
import { Icon } from '..';

describe('Icon component', () => {
  it('should Exist', () => {
    expect(Icon).toMatchSnapshot();
  });
  it('should have box classname', () => {
    const component = renderer.create(<Icon icon="bars" />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should concat Bulma class with classes in props', () => {
    const component = renderer.create(<Icon icon="bars" className="other-class" />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
