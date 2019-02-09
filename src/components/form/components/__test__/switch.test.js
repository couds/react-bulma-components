import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { Switch } from '../switch';

describe('Switch component', () => {
  it('Should Exists', () => {
    expect(Switch).toMatchSnapshot();
  });
  it('Should have checkbox classname', () => {
    const component = renderer.create(<Switch>Text</Switch>);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should change value on change event', () => {
    const spy = jest.fn();
    const component = shallow(<Switch onChange={spy}>Text</Switch>);
    component.find('input').simulate('change');
    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('Should set input checked if checked', () => {
    const component = shallow(<Switch checked />);
    expect(component.find('input').is('[checked]')).toBe(true);
  });
});
