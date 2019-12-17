import React from 'react';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';
import Box from '..';

describe('Box component', () => {
  it('Should Exist', () => {
    expect(Box).toMatchSnapshot();
  });
  it('Should have box classname', () => {
    const component = renderer.create(<Box>Facebook</Box>);
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
      <Box renderAs="section" style={{ width: 200, zIndex: 1 }}>
        This should be a section with custom styles
      </Box>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should accept a react Element as renderAs prop', () => {
    // eslint-disable-next-line react/prop-types
    const Custom = props => (
      <p {...props}>
        Custom
        {props.children}
      </p>
    );

    Custom.propTypes = { children: PropTypes.node.isRequired };

    const component = renderer.create(
      <Box renderAs={Custom}>This should be a p element</Box>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
