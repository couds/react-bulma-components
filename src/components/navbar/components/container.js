import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const NavbarContainer = ({ className, children, position, ...props }) => (
  <Element
    {...props}
    className={classnames(
      {
        [`navbar-${position}`]: position,
      },
      className,
    )}
  >
    {children}
  </Element>
);

NavbarContainer.propTypes = {
  position: PropTypes.oneOf(['start', 'end']),
};

NavbarContainer.defaultProps = {
  position: 'start',
};

export default NavbarContainer;
