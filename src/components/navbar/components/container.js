import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const NavbarContainer = ({ className, children, align, ...props }) => (
  <Element
    {...props}
    className={classnames(
      {
        [`navbar-${align}`]: align,
      },
      className,
    )}
  >
    {children}
  </Element>
);

NavbarContainer.propTypes = {
  align: PropTypes.oneOf(['start', 'end']),
};

NavbarContainer.defaultProps = {
  align: 'start',
};

export default NavbarContainer;
