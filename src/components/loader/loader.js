import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../modifiers';
import Element from '../element';

const Loader = React.forwardRef(({
  children,
  className,
  ...props
}, ref) => (
  <Element
    {...props}
    ref={ref}
    className={classnames('loader', className)}
  >
    {children}
  </Element>
));

Loader.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

Loader.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
};

export default Loader;
