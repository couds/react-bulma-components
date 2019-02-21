import React from 'react';
import { render } from 'react-testing-library';
import { Footer } from '..';

describe('Footer component', () => {
  it('should have footer classname', () => {
    const { asFragment } = render(
      <Footer>
        <div className="bd-notification is-success">
          <p>Default</p>
          <p>Container</p>
        </div>
      </Footer>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
