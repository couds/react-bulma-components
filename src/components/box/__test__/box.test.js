import React from 'react';
import renderer from 'react-test-renderer';
import Box from '..';

describe('Box component', () => {
  it('Should Exist', () => {
    expect(Box).toMatchSnapshot();
  });
  it('Should have box classname', () => {
    const component = renderer.create(
      <Box>Facebook</Box>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should concat Bulma class with classes in props', () => {
    const component = renderer.create(
      <Box className="other-class test">Facebook</Box>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should render as an html section', () => {
    const component = renderer.create(
      <Box renderAs="section">This should be a section</Box>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should have custom inline styles', () => {
    const component = renderer.create(
      <Box renderAs="section" style={{ width: 200, zIndex: 1 }}>This should be a section with custom styles</Box>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
