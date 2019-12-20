import React from 'react';
import renderer from 'react-test-renderer';
import Table from '..';

describe('Table component', () => {
  it('Should exist', () => {
    expect(Table).toMatchSnapshot();
  });
  it('Should have table classname', () => {
    const component = renderer.create(
      <Table>
        Test <a href="test">Give me</a>
      </Table>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should concat classname in props with Bulma classname', () => {
    const component = renderer.create(
      <Table className="other-class this-is-a-test">
        <p>Default</p>
      </Table>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should use inline styles', () => {
    const component = renderer.create(
      <Table style={{ height: 250 }}>
        <p>Default</p>
      </Table>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
