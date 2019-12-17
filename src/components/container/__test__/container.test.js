import React from 'react';
import renderer from 'react-test-renderer';
import Container from '..';

describe('Container component', () => {
  it('Should have container classname', () => {
    const component = renderer.create(
      <Container>
        <p className="bd-notification is-success">
          <p>Default</p>
          <p>Container</p>
        </p>
      </Container>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Should have helper classnames', () => {
    const component = renderer.create(
      <Container
        paddingless
        responsive={{
          widescreen: {
            display: {
              value: 'block',
              only: true,
            },
          },
          touch: {
            display: {
              value: 'flex',
            },
          },
          desktop: {
            hide: {
              value: true,
            },
          },
        }}
      >
        <p className="bd-notification is-success">
          <p>Default</p>
          <p>Container</p>
        </p>
      </Container>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
