import React from 'react';
import { render } from 'react-testing-library';
import { Select } from '../select';

describe('Select component', () => {
  it('should have select classname', () => {
    const { asFragment } = render(
      <Select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </Select>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should concat classname in props with Bulma classname', () => {
    const { asFragment } = render(
      <Select className="other-class this-is-a-test">
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </Select>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should use inline styles', () => {
    const { asFragment } = render(
      <Select style={{ width: '100%' }}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </Select>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should be large, red, disabled and multioption', () => {
    const { asFragment } = render(
      <Select color="danger" size="large" multiple disabled>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </Select>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
