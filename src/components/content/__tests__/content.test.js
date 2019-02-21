import React from 'react';
import { render } from 'react-testing-library';
import { Content } from '..';

describe('Content component', () => {
  it('Should have content classname', () => {
    const { asFragment } = render(
      <Content>
        <div className="bd-notification is-success">
          <p>Default</p>
          <p>Container</p>
        </div>
      </Content>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
