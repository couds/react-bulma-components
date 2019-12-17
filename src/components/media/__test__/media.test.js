import React from 'react';
import renderer from 'react-test-renderer';
import Media from '..';

describe('Media component', () => {
  it('Should exist', () => {
    expect(Media).toMatchSnapshot();
  });
  it('Should expose Level Side and Item', () => {
    expect(Media.Content).toMatchSnapshot();
    expect(Media.Item).toMatchSnapshot();
  });
  it('Should have media classname', () => {
    const component = renderer.create(
      <Media>
        <img
          alt="placeholder"
          src="http://bulma.io/images/placeholders/128x128.png"
        />
      </Media>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should hbe a Media Item', () => {
    const component = renderer.create(
      <Media.Item renderAs="figure" position="left">
        <img
          alt="placeholder"
          src="http://bulma.io/images/placeholders/128x128.png"
        />
      </Media.Item>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should hbe a Media Item Centered', () => {
    const component = renderer.create(
      <Media.Item renderAs="figure" position="center">
        <img
          alt="placeholder"
          src="http://bulma.io/images/placeholders/128x128.png"
        />
      </Media.Item>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be a Media Content', () => {
    const component = renderer.create(
      <Media.Content>
        <p>Lorem Ipsum</p>
      </Media.Content>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should concat classname in props with Bulma classname', () => {
    const component = renderer.create(
      <Media className="other-class this-is-a-test">
        <p>Default</p>
      </Media>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should use inline styles', () => {
    const component = renderer.create(
      <Media style={{ height: 250 }}>
        <p>Default</p>
      </Media>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
