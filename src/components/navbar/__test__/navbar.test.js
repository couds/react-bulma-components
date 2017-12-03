import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from '..';

describe('Navbar component', () => {
  it('Should Exist', () => {
    expect(Navbar).toMatchSnapshot();
  });
  it('Should have Navbar classname', () => {
    const component = renderer.create(<Navbar>Facebook</Navbar>);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should concat Bulma class with classes in props', () => {
    const component = renderer.create(<Navbar className="other-class test">Facebook</Navbar>);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should render as an html section', () => {
    const component = renderer.create(<Navbar renderAs="section">This should be a section</Navbar>);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should have custom inline styles', () => {
    const component = renderer.create(<Navbar renderAs="section" style={{ width: 200, zIndex: 1 }}>This should be a section with custom styles</Navbar>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
