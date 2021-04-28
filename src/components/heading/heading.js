import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../element';

const Heading = ({
  children,
  className,
  size,
  subtitle,
  weight,
  spaced,
  heading,
  ...props
}) => {
  return (
    <Element
      {...props}
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
  );
};

Heading.propTypes = {
  size: PropTypes.oneOfType([
    PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
    PropTypes.string,
    PropTypes.number,
  ]),
  weight: PropTypes.oneOf(['light', 'normal', 'semibold', 'bold']),
  subtitle: PropTypes.bool,
  heading: PropTypes.bool,
  spaced: PropTypes.bool,
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

Heading.defaultProps = {
  renderAs: 'h1',
};

export default Heading;
