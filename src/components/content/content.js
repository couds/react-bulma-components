import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../modifiers';
import Element from '../element';

const Content = React.forwardRef(({ children, className, size, ...props }, ref) => (
  <Element
    {...props}
    ref={ref}
    className={cn('content', className, {
      [`is-${size}`]: size
    })}
  >
    {children}
  </Element>
));

Content.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

Content.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: undefined,
  style: {},
  size: null,
  renderAs: 'div'
};

export default Content;
