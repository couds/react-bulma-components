import React from 'react';
import renderer from 'react-test-renderer';
import Breadcrumb from '..';

/* eslint-disable react/prop-types */
const Anchor = ({
  children,
  ...props
}) => (<a className="Others" {...props} >{children}</a>);
/* eslint-enable react/prop-types */

describe('Breadcrumb component', () => {
  beforeEach(() => {
    // eslint-disable-next-line no-console
    console.warn = jest.genMockFn();
  });
  afterAll(() => {
    // eslint-disable-next-line no-console
    console.warn.mockRestore();
  });
  it('Should be a Breadcrumb', () => {
    const component = renderer.create(<Breadcrumb
      items={[
          {
            url: '/',
            name: 'Home',
          },
          {
            url: '/section',
            name: 'Section',
          },
          {
            url: '/detail',
            name: 'Details',
            active: true,
          },
        ]}
    />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  [null, 'arrow', 'dot', 'bullet', 'succeeds'].map(separator => (
    it(`should use separator ${separator}`, () => {
      const component = renderer.create(<Breadcrumb
        separator={separator}
        items={[
            {
              name: 'Storybook',
              url: '#1',
            }, {
              name: 'Breadcrumb',
              url: '#2',
            }, {
              name: 'Breadcrumb Types',
              url: '#3',
              active: true,
            },
          ]}
      />);
      expect(component.toJSON()).toMatchSnapshot();
    })
  ));
  it('Should throw a warning that hrefAttr is not defined', () => {
    const component = renderer.create(<Breadcrumb
      renderAs={Anchor}
      items={[
          {
            url: '/',
            name: 'Home',
          },
          {
            url: '/section',
            name: 'Section',
          },
          {
            url: '/detail',
            name: 'Details',
            active: true,
          },
        ]}
    />);
    expect(global.console.warn).toBeCalled();
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should use inline style and custom size', () => {
    const component = renderer.create(<Breadcrumb
      style={{ marginTop: 10 }}
      size="large"
      items={[
          {
            url: '/',
            name: 'Home',
          },
          {
            url: '/section',
            name: 'Section',
          },
          {
            url: '/detail',
            name: 'Details',
            active: true,
          },
        ]}
    />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
