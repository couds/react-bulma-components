import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Dropdown = ({
  style,
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
      style={style}
      className={classnames('navbar-dropdown', className, {
        'is-boxed': boxed,
        'is-right': right,
      })}
      {...props}
    >
      {children}
    </Element>
  );
};

Dropdown.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  renderAs: PropTypes.string,
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
