import React from 'react';
import renderer from 'react-test-renderer';
import Breadcrumb from '..';

describe('Breadcrumb component', () => {
  describe('Breadcrumb.Item component', () => {
    it('should render <li>', () => {
      const component = renderer.create(
        <Breadcrumb.Item>item</Breadcrumb.Item>,
      );
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('should have is-active class', () => {
      const component = renderer.create(
        <Breadcrumb.Item active>active item</Breadcrumb.Item>,
      );
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  it('Should be a Breadcrumb', () => {
    const component = renderer.create(
      <Breadcrumb>
        <Breadcrumb.Item>
          <a href="/">Home</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/section">Section</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/detail">Details</a>
        </Breadcrumb.Item>
      </Breadcrumb>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  [null, 'arrow', 'dot', 'bullet', 'succeeds'].map((separator) =>
    it(`should use separator ${separator}`, () => {
      const component = renderer.create(
        <Breadcrumb separator={separator}>
          <Breadcrumb.Item>
            <a href="#1">Storybook</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="#2">Breadcrumb</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="#3">Breadcrumb Types</a>
          </Breadcrumb.Item>
        </Breadcrumb>,
      );
      expect(component.toJSON()).toMatchSnapshot();
    }),
  );

  it('Should use inline style and custom size', () => {
    const component = renderer.create(
      <Breadcrumb style={{ marginTop: 10 }} size="large">
        <Breadcrumb.Item>
          <a href="/">Home</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/section">Section</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          <a href="/detail">Details</a>
        </Breadcrumb.Item>
      </Breadcrumb>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
