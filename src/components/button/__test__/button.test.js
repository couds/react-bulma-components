import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Button from '..';

describe('Button component', () => {
  it('Should be a default Button', () => {
    const component = renderer.create(
      <Button />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be a Primary Button', () => {
    const component = renderer.create(
      <Button color="primary" />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be a Large Primary Button', () => {
    const component = renderer.create(
      <Button color="primary" size="large" />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should render as a static Button', () => {
    const component = renderer.create(
      <Button static color="primary" />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should render as a html button', () => {
    const component = renderer.create(
      <Button renderAs="button" color="danger" />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should render be disabled', () => {
    const component = renderer.create(
      <Button disabled />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be a submit form button', () => {
    const component = renderer.create(
      <Button submit />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be a reset form button', () => {
    const component = renderer.create(
      <Button reset />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should have a Click listener', () => {
    const onClick = jest.fn();
    const component = shallow(
      <Button onClick={onClick} />,
    );
    component.simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it('Should have a call default onClick is no listener is set', () => {
    const spy = jest.spyOn(Button.defaultProps, 'onClick');
    const component = shallow(
      <Button />,
    );
    component.simulate('click');
    component.simulate('click');
    expect(spy).toHaveBeenCalledTimes(2);
    Button.defaultProps.onClick.mockRestore();
  });
});
