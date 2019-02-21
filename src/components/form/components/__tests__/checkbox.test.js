import React from 'react';
import { fireEvent, render } from 'react-testing-library';
import { Checkbox } from '../checkbox';

describe('Checkbox component', () => {
  it('should render', () => {
    const { asFragment } = render(<Checkbox>Text</Checkbox>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render unchecked', () => {
    const { getByTestId } = render(<Checkbox />);
    expect(getByTestId('checkbox-input')).not.toHaveAttribute('checked', '');
  });
  it('should set input checked if checked', () => {
    const { getByTestId } = render(<Checkbox checked />);
    expect(getByTestId('checkbox-input')).toHaveAttribute('checked', '');
  });
  it('should change value on change event', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(<Checkbox onChange={onChange}>Text</Checkbox>);
    fireEvent.click(getByTestId('checkbox-label'));
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
