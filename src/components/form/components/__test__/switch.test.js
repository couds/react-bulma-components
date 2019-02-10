import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { Switch } from '../switch';

describe('Switch component', () => {
  let component;
  it('Should Exists', () => {
    expect(Switch).toMatchSnapshot();
  });
  it('Should have checkbox classname', () => {
    component = renderer.create(<Switch>Text</Switch>);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should change value on change event', () => {
    const spy = jest.fn();
    component = shallow(<Switch onChange={spy}>Text</Switch>);
    component.find('input').simulate('change');
    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('Should have info color classname', () => {
    component = renderer.create(<Switch color="info">Text</Switch>);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should have medium classname', () => {
    component = renderer.create(<Switch size="medium">Text</Switch>);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be disabled', () => {
    component = renderer.create(<Switch disabled>Text</Switch>);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be elastic', () => {
    component = shallow(<Switch>Text</Switch>);
    component.props().onMouseDown();
    expect(component).toMatchSnapshot();
  });
  it('Should set input checked if checked', () => {
    component = shallow(<Switch checked />);
    expect(component.find('input').is('[checked]')).toBe(true);
  });
});
