import React from 'react';
import renderer from 'react-test-renderer';
import Content from '..';

describe('Content component', () => {
  it('Should have content classname', () => {
    const component = renderer.create(
      <Content>
        <p className="bd-notification is-success">
          <p>Default</p>
          <p>Container</p>
        </p>
      </Content>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should have content classname with normal size', () => {
    const component = renderer.create(
      <Content size="normal">
        <p className="bd-notification is-success">
          <p>Default</p>
          <p>Container</p>
        </p>
      </Content>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
