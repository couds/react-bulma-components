import React from 'react';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';
import Element from '..';

describe('Element component', () => {
  it('Should Exist', () => {
    expect(Element).toMatchSnapshot();
  });
  it('Should have helpers classnames', () => {
    const component = renderer.create(
      <Element textColor="white" pull="left">
        Facebook
      </Element>,
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
      <Element renderAs={Custom}>This should be a p element</Element>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
