import React from 'react';
import renderer from 'react-test-renderer';
import Loader from '..';

describe('Box component', () => {
  it('Should Exist', () => {
    expect(Loader).toMatchSnapshot();
  });
  it('Should have box classname', () => {
    const component = renderer.create(<Loader />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should concat Bulma class with classes in props', () => {
    const component = renderer.create(<Loader className="other-class test" />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should render as an html section', () => {
    const component = renderer.create(<Loader renderAs="section" />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should have custom inline styles', () => {
    const component = renderer.create(
      <Loader renderAs="section" style={{ width: 200, zIndex: 1 }} />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
