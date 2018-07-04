import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';

const breakpoints = [null].concat(Object.keys(CONSTANTS.BREAKPOINTS).map(key => CONSTANTS.BREAKPOINTS[key]));

const Container = ({
  children,
  fluid,
  breakpoint,
  className,
  renderAs,
  ...allProps
}) => {
  const Element = renderAs;
  const props = modifiers.clean(allProps);
  return (
    <Element
      {...props}
      className={classnames('container', modifiers.classnames(allProps), className, {
        'is-fluid': fluid,
        [`is-${breakpoint}`]: breakpoint,
      })}
    >
      {children}
    </Element>
  );
};

Container.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  fluid: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  breakpoint: PropTypes.oneOf(breakpoints),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

Container.defaultProps = {
  ...modifiers.defaultProps,
  fluid: false,
  children: null,
  breakpoint: null,
  className: '',
  style: {},
  renderAs: 'div',
};

export default Container;
