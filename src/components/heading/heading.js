import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../modifiers';
import Element from '../element';

const Heading = React.forwardRef(({
  children,
  className,
  size,
  subtitle,
  weight,
  spaced,
  heading,
  ...props
}, ref) => (
  <Element
    {...props}
    ref={ref}
    className={classnames(className, {
      title: !subtitle && !heading,
      subtitle,
      heading,
      [`is-${size}`]: size,
      [`has-text-weight-${weight}`]: weight,
      'is-spaced': spaced && !subtitle,
    })}
  >
    {children}
  </Element>
));

Heading.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  weight: PropTypes.oneOf(['light', 'normal', 'semibold', 'bold']),
  subtitle: PropTypes.bool,
  heading: PropTypes.bool,
  spaced: PropTypes.bool,
};

Heading.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  renderAs: 'h1',
  size: null,
  weight: null,
  subtitle: false,
  heading: false,
  spaced: false,
};

export default Heading;
