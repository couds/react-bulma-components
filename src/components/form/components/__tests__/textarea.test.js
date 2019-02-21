import React from 'react';
import { render } from 'react-testing-library';
import { Textarea } from '../textarea';

describe('Textarea component', () => {
  it('should exist', () => {
    expect(Textarea).toMatchSnapshot();
  });
  it('should have textarea classname', () => {
    const { asFragment } = render(<Textarea />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should concat classname in props with Bulma classname', () => {
    const { asFragment } = render(<Textarea className="other-class this-is-a-test" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should use inline styles', () => {
    const { asFragment } = render(<Textarea style={{ height: 250 }} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should be large with 10 rows and readOnly', () => {
    const { asFragment } = render(<Textarea rows={10} readOnly size="large" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should be disabled with placeholder and value', () => {
    const { asFragment } = render(<Textarea value="TEST" disabled placeholder="hello tests" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
