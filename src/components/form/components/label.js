import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';
import Element from '../../element';

const Label = ({ children, className, size, ...props }) => (
  <Element
    renderAs="label"
    {...props}
    className={classnames('label', className, {
      [`is-${size}`]: size,
    })}
  >
    {children}
  </Element>
);

Label.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  htmlFor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Label.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: undefined,
  style: undefined,
  size: undefined,
  htmlFor: undefined,
};

export default Label;
