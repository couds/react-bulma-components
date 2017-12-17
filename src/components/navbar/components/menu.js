import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Menu = ({
  style, className, active, children, ...props
}) => (
  <div
    style={style}
    className={classnames('navbar-menu', className, {
      'is-active': active,
    })}
    {...props}
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
