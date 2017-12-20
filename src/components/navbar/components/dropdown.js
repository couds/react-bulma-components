import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Dropdown = ({
  className,
  renderAs,
  boxed,
  right,
  children,
  ...props
}) => {
  const Element = renderAs;
  return (
    <Element
      {...props}
      className={classnames('navbar-dropdown', className, {
        'is-boxed': boxed,
        'is-right': right,
      })}
    >
      {children}
    </Element>
  );
};

Dropdown.propTypes = {
  style: PropTypes.shape({}),
  className: PropTypes.string,
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  boxed: PropTypes.bool,
  right: PropTypes.bool,
};

Dropdown.defaultProps = {
  style: {},
  className: '',
  children: null,
  renderAs: 'span',
  boxed: false,
  right: false,
};

export default Dropdown;
