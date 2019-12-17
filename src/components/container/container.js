import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';
import Element from '../element';
import renderAsShape from '../../modifiers/render-as';

const breakpoints = [null].concat(
  Object.keys(CONSTANTS.BREAKPOINTS).map(key => CONSTANTS.BREAKPOINTS[key]),
);

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
  ...modifiers.propTypes,
  children: PropTypes.node,
  fluid: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  breakpoint: PropTypes.oneOf(breakpoints),
  renderAs: renderAsShape,
};

Container.defaultProps = {
  ...modifiers.defaultProps,
  fluid: false,
  children: null,
  breakpoint: undefined,
  className: undefined,
  style: undefined,
  renderAs: 'div',
};

export default Container;
