import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '..';

describe('Footer component', () => {
  it('Should have footer classname', () => {
    const component = renderer.create(
      <Footer>
        <p className="bd-notification is-success">
          <p>Default</p>
          <p>Container</p>
        </p>
      </Footer>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
