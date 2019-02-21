import React from 'react';
import { render } from 'react-testing-library';
import { Breadcrumb } from '..';

describe('Breadcrumb component', () => {
  it('should be a Breadcrumb', () => {
    const { asFragment } = render(
      <Breadcrumb
        items={[
          {
            url: '/',
            name: 'Home'
          },
          {
            url: '/section',
            name: 'Section'
          },
          {
            url: '/detail',
            name: 'Details',
            active: true
          }
        ]}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  [null, 'arrow', 'dot', 'bullet', 'succeeds'].map(separator =>
    it(`should use separator ${separator}`, () => {
      const { asFragment } = render(
        <Breadcrumb
          separator={separator}
          items={[
            {
              name: 'Storybook',
              url: '#1'
            },
            {
              name: 'Breadcrumb',
              url: '#2'
            },
            {
              name: 'Breadcrumb Types',
              url: '#3',
              active: true
            }
          ]}
        />
      );
      expect(asFragment()).toMatchSnapshot();
    })
  );
  it('should use inline style and custom size', () => {
    const { asFragment } = render(
      <Breadcrumb
        style={{ marginTop: 10 }}
        size="large"
        items={[
          {
            url: '/',
            name: 'Home'
          },
          {
            url: '/section',
            name: 'Section'
          },
          {
            url: '/detail',
            name: 'Details',
            active: true
          }
        ]}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
