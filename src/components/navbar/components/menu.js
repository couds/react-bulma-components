import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Menu = ({
  className,
  active,
  children,
  ...props
}) => (
  <div
    {...props}
    className={classnames('navbar-menu', className, {
      'is-active': active,
    })}
  >
    {children}
  </div>
);

Menu.propTypes = {
  style: PropTypes.shape({}),
  className: PropTypes.string,
  active: PropTypes.bool,
  children: PropTypes.node,
};

Menu.defaultProps = {
  style: {},
  className: '',
  active: false,
  children: null,
};

export default Menu;
