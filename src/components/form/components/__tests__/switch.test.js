import React from 'react';
import { fireEvent, render } from 'react-testing-library';
import { Switch } from '../switch';

describe('Switch component', () => {
  it('should render', () => {
    const { asFragment } = render(<Switch>Text</Switch>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should change value on change event', () => {
    const spy = jest.fn();
    const { getByLabelText } = render(<Switch onChange={spy}>Text</Switch>);
    fireEvent.click(getByLabelText(/Text/i));
    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('should have info color classname', () => {
    const { asFragment } = render(<Switch color="info">Text</Switch>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should have medium classname', () => {
    const { asFragment } = render(<Switch size="medium">Text</Switch>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should be disabled', () => {
    const { asFragment } = render(<Switch disabled>Text</Switch>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should be elastic', () => {
    const { getByLabelText, getByTestId } = render(<Switch>Text</Switch>);
    fireEvent.mouseDown(getByLabelText(/Text/i));
    expect(getByTestId('switch-check')).toHaveClass('is-elastic');
  });
  it('should not be elastic', () => {
    const { getByLabelText, getByTestId } = render(<Switch>Text</Switch>);
    fireEvent.mouseOut(getByLabelText(/Text/i));
    expect(getByTestId('switch-check')).not.toHaveClass('is-elastic');
  });
  it('should not be elastic 2', () => {
    const { getByLabelText, getByTestId } = render(<Switch>Text</Switch>);
    fireEvent.mouseUp(getByLabelText(/Text/i));
    expect(getByTestId('switch-check')).not.toHaveClass('is-elastic');
  });
  it('should set input checked if checked', () => {
    const { getByTestId } = render(<Switch checked />);
    expect(getByTestId('switch-input')).toHaveAttribute('checked', '');
  });
});
