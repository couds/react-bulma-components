import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Image from '..';

describe('Image component', () => {
  it('Should exist', () => {
    expect(Image).toMatchSnapshot();
  });

  it('Should have image classname', () => {
    const component = renderer.create(
      <Image src="http://mydomain.com/image" />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Should be square', () => {
    const component = renderer.create(
      <Image size="square" src="http://mydomain.com/image" />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Should be rounded', () => {
    const component = renderer.create(
      <Image rounded src="http://mydomain.com/image" />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Should be 32x32', () => {
    const component = renderer.create(
      <Image size={32} src="http://mydomain.com/image" />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should be fullwidth', () => {
    const component = renderer.create(
      <Image fullwidth src="http://mydomain.com/image" />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Should have use default image if error encounter', () => {
    const component = shallow(
      <Image
        src="http://mydomain.com/image"
        fallback="http://mydomain.com/default"
      />,
    );
    const image = component.find('img');
    image.simulate('error');
    expect(component.find('img').props()).toHaveProperty(
      'src',
      'http://mydomain.com/default',
    );
  });

  it('Should update src', () => {
    const component = shallow(<Image src="http://mydomain.com/image" />);
    component.setProps({ src: 'http://mydomain.com/other' });
    expect(component.find('img').props()).toHaveProperty(
      'src',
      'http://mydomain.com/other',
    );
  });

  it('Should NOT update src', () => {
    const component = shallow(<Image src="http://mydomain.com/image" />);
    component.setProps({ alt: 'change prop' });
    expect(component.find('img').props()).toHaveProperty(
      'src',
      'http://mydomain.com/image',
    );
  });
});
