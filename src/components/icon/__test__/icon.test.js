import React from 'react';
import renderer from 'react-test-renderer';
import Icon from '..';

describe('Icon component', () => {
  it('Should Exist', () => {
    expect(Icon).toMatchSnapshot();
  });
  it('Should have box classname', () => {
    const component = renderer.create(<Icon icon="bars" />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should concat Bulma class with classes in props', () => {
    const component = renderer.create(
      <Icon icon="bars" className="other-class" />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should render wrapped on icon-text class', () => {
    const component = renderer.create(<Icon.Text><Icon icon="bars" /></Icon.Text>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
