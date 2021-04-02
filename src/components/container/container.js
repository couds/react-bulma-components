import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CONSTANTS from '../../constants';

import Element from '../element';

const breakpoints = [null].concat(Object.values(CONSTANTS.BREAKPOINTS));

const Container = ({ children, fluid, breakpoint, className, ...props }) => (
  <Element
    {...props}
    className={classnames('container', className, {
      'is-fluid': fluid,
      [`is-${breakpoint}`]: breakpoint,
    })}
  >
    {children}
  </Element>
);

Container.propTypes = {
  ...Element.propTypes,
  /**
   * Whether this container is fluid. If true, the container
   * will be fullwidth, but will also leave 32px on left and right side.
   */
  fluid: PropTypes.bool,
  /**
   * Specifies the breakpoint at which the container will stop being fullwidth.
   */
  breakpoint: PropTypes.oneOf(breakpoints),
};

Container.defaultProps = {
  ...Element.defaultProps,
};

export default Container;
