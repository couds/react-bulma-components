import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../modifiers';

const Heading = ({
  children,
  className,
  renderAs,
  size,
  subtitle,
  weight,
  spaced,
  heading,
  ...allProps
}) => {
  const Element = renderAs;
  const props = modifiers.clean(allProps);
  return (
    <Element
      {...props}
      className={classnames(className, modifiers.classnames(allProps), {
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
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
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
  style: {},
  renderAs: 'h1',
  size: null,
  weight: null,
  subtitle: false,
  heading: false,
  spaced: false,
};

export default Heading;
