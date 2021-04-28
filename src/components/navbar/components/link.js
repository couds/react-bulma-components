import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const NavbarLink = ({ className, children, arrowless, ...props }) => {
  return (
    <Element
      {...props}
      className={classnames('navbar-link', className, {
        'is-arrowless': arrowless,
      })}
    >
      {children}
    </Element>
  );
};

NavbarLink.propTypes = {
  arrowless: PropTypes.bool,
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

NavbarLink.defaultProps = {
  renderAs: 'span',
};

export default NavbarLink;
