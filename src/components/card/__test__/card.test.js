import React from 'react';
import renderer from 'react-test-renderer';
import Card from '..';

describe('Card component', () => {
  it('Should have card classname', () => {
    const component = renderer.create(
      <Card>Card Content</Card>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should have card-image classname', () => {
    const component = renderer.create(
      <Card type="image" size="4by3" src="http://bulma.io/images/placeholders/1280x960.png" />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should have card-content classname', () => {
    const component = renderer.create(
      <Card type="content">Content</Card>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
