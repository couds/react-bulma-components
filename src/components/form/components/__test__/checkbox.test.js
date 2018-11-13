import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Checkbox from '../checkbox';

describe('Checkbox component', () => {
  it('Should Exists', () => {
    expect(Checkbox).toMatchSnapshot();
  });
  it('Should have checkbox classname', () => {
    const component = renderer.create(
      <Checkbox>
        Text
      </Checkbox>);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should change value on change event', () => {
    const spy = jest.fn();
    const component = shallow(
      <Checkbox onChange={spy}>
        Text
      </Checkbox>);
    component.find('input').simulate('change');
    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('Should set input checked if checked', () => {
    const component = shallow(<Checkbox checked />);
    expect(component.find('input').is('[checked]')).toBe(true);
  });
});
