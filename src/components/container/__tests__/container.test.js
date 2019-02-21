import React from 'react';
import { render } from 'react-testing-library';
import { Container } from '..';

describe('Container component', () => {
  it('should have container classname', () => {
    const { asFragment } = render(
      <Container>
        <div className="bd-notification is-success">
          <p>Default</p>
          <p>Container</p>
        </div>
      </Container>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have helper classnames', () => {
    const { asFragment } = render(
      <Container
        paddingless
        responsive={{
          widescreen: {
            display: {
              value: 'block',
              only: true
            }
          },
          touch: {
            display: {
              value: 'flex'
            }
          },
          desktop: {
            hide: {
              value: true
            }
          }
        }}
      >
        <div className="bd-notification is-success">
          <p>Default</p>
          <p>Container</p>
        </div>
      </Container>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
