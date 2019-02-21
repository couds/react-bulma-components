import PropTypes from 'prop-types';
import React from 'react';
import { render } from 'react-testing-library';
import { Box } from '..';

describe('Box component', () => {
  it('Should have box classname', () => {
    const { asFragment } = render(<Box>Facebook</Box>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('Should concat Bulma class with classes in props', () => {
    const { asFragment } = render(<Box className="other-class test">Facebook</Box>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('Should render as an html section', () => {
    const { asFragment } = render(<Box renderAs="section">This should be a section</Box>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('Should have custom inline styles', () => {
    const { asFragment } = render(
      <Box renderAs="section" style={{ width: 200, zIndex: 1 }}>
        This should be a section with custom styles
      </Box>
    );
    expect(asFragment()).toMatchSnapshot();
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

    const { asFragment } = render(<Box renderAs={Custom}>This should be a p element</Box>);
    expect(asFragment()).toMatchSnapshot();
  });
});
