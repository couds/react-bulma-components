import React from 'react';
import { render } from 'react-testing-library';
import { Table } from '../Table';

describe('Table component', () => {
  it('should render', () => {
    const { asFragment } = render(<Table />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should concat classname in props with classname', () => {
    const { asFragment } = render(
      <Table className="other-class this-is-a-test">
        <p>Default</p>
      </Table>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should use inline styles', () => {
    const { asFragment } = render(
      <Table style={{ height: 250 }}>
        <p>Default</p>
      </Table>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
