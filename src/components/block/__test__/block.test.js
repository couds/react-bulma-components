import React from 'react';
import renderer from 'react-test-renderer';
import Block from '..';

describe('Box component', () => {
  it('Should Exist', () => {
    expect(Block).toBeDefined();
  });
  it('Should have box classname', () => {
    const component = renderer.create(<Block>Facebook</Block>);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should concat Bulma class with classes in props', () => {
    const component = renderer.create(
      <Block className="other-class test">Facebook</Block>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
