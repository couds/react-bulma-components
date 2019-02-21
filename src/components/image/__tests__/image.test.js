import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { Image } from '..';

describe('Image component', () => {
  it('should exist', () => {
    expect(Image).toMatchSnapshot();
  });

  it('should have image classname', () => {
    const component = renderer.create(<Image src="http://mydomain.com/image" />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should be square', () => {
    const component = renderer.create(<Image size="square" src="http://mydomain.com/image" />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should be rounded', () => {
    const component = renderer.create(<Image rounded src="http://mydomain.com/image" />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should be 32x32', () => {
    const component = renderer.create(<Image size={32} src="http://mydomain.com/image" />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should have use default image if error encounter', () => {
    const component = shallow(<Image src="http://mydomain.com/image" fallback="http://mydomain.com/default" />);
    const image = component.find('img');
    image.simulate('error');
    expect(component.find('img').props()).toHaveProperty('src', 'http://mydomain.com/default');
  });

  it('should update src', () => {
    const component = shallow(<Image src="http://mydomain.com/image" />);
    component.setProps({ src: 'http://mydomain.com/other' });
    expect(component.find('img').props()).toHaveProperty('src', 'http://mydomain.com/other');
  });

  it('should NOT update src', () => {
    const component = shallow(<Image src="http://mydomain.com/image" />);
    component.setProps({ alt: 'change prop' });
    expect(component.find('img').props()).toHaveProperty('src', 'http://mydomain.com/image');
  });
});
