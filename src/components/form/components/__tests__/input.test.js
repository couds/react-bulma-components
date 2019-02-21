import React from 'react';
import { render } from 'react-testing-library';
import { Input } from '../input';

describe('Input component', () => {
  it('should render', () => {
    const { asFragment } = render(<Input />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should concat classname in props with classname', () => {
    const { asFragment } = render(<Input className="other-class this-is-a-test" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should use inline styles', () => {
    const { asFragment } = render(<Input style={{ height: 250 }} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should be type email and a with success colors', () => {
    const { asFragment } = render(<Input color="success" type="email" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should be large and readOnly', () => {
    const { asFragment } = render(<Input readOnly size="large" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should be disabled with placeholder and value', () => {
    const { asFragment } = render(<Input value="TEST" disabled placeholder="hello tests" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
