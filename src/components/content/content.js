import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../modifiers';
import Element from '../element';

const Content = ({
  children,
  className,
  size,
  ...props
}) => (
  <Element
    {...props}
    className={classnames('content', className, {
      [`is-${size}`]: size,
    })}
  >
    {children}
  </Element>
);

Content.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

Content.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: undefined,
  style: {},
  size: null,
  renderAs: 'div',
};

export default Content;
