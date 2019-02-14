import { shallow } from 'enzyme';
import React from 'react';
import { act, fireEvent, render, testHook } from 'react-testing-library';
import { Switch, switchStateHook } from '../switch';

describe('Switch component', () => {
  let component;
  it('Should have checkbox classname', () => {
    const { asFragment } = render(<Switch>Text</Switch>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('Should change value on change event', () => {
    const spy = jest.fn();
    const { getByLabelText } = render(<Switch onChange={spy}>Text</Switch>);
    fireEvent.click(getByLabelText(/Text/i));
    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('Should have info color classname', () => {
    const { asFragment } = render(<Switch color="info">Text</Switch>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('Should have medium classname', () => {
    const { asFragment } = render(<Switch size="medium">Text</Switch>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('Should be disabled', () => {
    const { asFragment } = render(<Switch disabled>Text</Switch>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('Should be elastic', () => {
    const { getByLabelText, getByTestId } = render(<Switch>Text</Switch>);
    fireEvent.mouseDown(getByLabelText(/Text/i));
    expect(getByTestId('switch-check')).toHaveClass('is-elastic');
  });
  it('Should not be elastic', () => {
    const { getByLabelText, getByTestId } = render(<Switch>Text</Switch>);
    fireEvent.mouseOut(getByLabelText(/Text/i));
    expect(getByTestId('switch-check')).not.toHaveClass('is-elastic');
  });
  it('Should not be elastic 2', () => {
    const { getByLabelText, getByTestId } = render(<Switch>Text</Switch>);
    fireEvent.mouseUp(getByLabelText(/Text/i));
    expect(getByTestId('switch-check')).not.toHaveClass('is-elastic');
  });
  it('Should set input checked if checked', () => {
    component = shallow(<Switch checked />);
    expect(component.find('input').is('[checked]')).toBe(true);
  });
  it('should accepts default initial values', () => {
    let isMouseDown;
    testHook(() => ({ isMouseDown } = switchStateHook()));

    expect(isMouseDown).toBe(false);
  });
  it('should provides an `setOpen` function', () => {
    let isMouseDown, setMouseDown;
    testHook(() => ({ isMouseDown, setMouseDown } = switchStateHook()));

    expect(isMouseDown).toBe(false);
    act(() => {
      setMouseDown(true);
    });
    expect(isMouseDown).toBe(true);
  });
});
