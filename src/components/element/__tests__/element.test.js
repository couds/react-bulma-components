import PropTypes from 'prop-types';
import React from 'react';
import { render } from 'react-testing-library';
import { Element } from '..';

describe('Element component', () => {
  it('Should have helpers classnames', () => {
    const { asFragment } = render(
      <Element textColor="white" pull="left">
        Facebook
      </Element>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('Should accept a react Element as renderAs prop', () => {
    const Custom = props => (
      <p {...props}>
        Custom
        {props.children}
      </p>
    );

    Custom.propTypes = { children: PropTypes.node.isRequired };

    const { asFragment } = render(<Element renderAs={Custom}>This should be a p element</Element>);
    expect(asFragment()).toMatchSnapshot();
  });
});
