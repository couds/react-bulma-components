import React from 'react';
import renderer from 'react-test-renderer';
import { Table } from '..';

describe('Table component', () => {
  it('should exist', () => {
    expect(Table).toMatchSnapshot();
  });
  it('should have table classname', () => {
    const component = renderer.create(
      <Table>
        Test <a href="test">Give me</a>
      </Table>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should concat classname in props with classname', () => {
    const component = renderer.create(
      <Table className="other-class this-is-a-test">
        <p>Default</p>
      </Table>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should use inline styles', () => {
    const component = renderer.create(
      <Table style={{ height: 250 }}>
        <p>Default</p>
      </Table>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
