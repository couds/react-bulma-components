import React from 'react';
import { render } from 'react-testing-library';
import { Radio } from '../radio';

describe('Radio component', () => {
  it('should render', () => {
    const { asFragment } = render(
      <Radio name="test">
        Test <a>Give me</a>
      </Radio>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should concat classname in props with classname', () => {
    const { asFragment } = render(
      <Radio name="test" className="other-class this-is-a-test">
        <p>Default</p>
      </Radio>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should use inline styles', () => {
    const { asFragment } = render(
      <Radio name="test" style={{ height: 250 }}>
        <p>Default</p>
      </Radio>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should be disabled, checked and with value', () => {
    const { asFragment } = render(
      <Radio name="test" value="TEST" checked disabled>
        <p>Default</p>
      </Radio>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
