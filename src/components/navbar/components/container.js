import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const alignMapper = {
  left: 'start',
  right: 'end',
};

const NavbarContainer = ({ className, children, align, ...props }) => {
  return (
    <Element
      {...props}
      className={classnames(
        {
          [`navbar-${alignMapper[align]}`]: alignMapper[align],
        },
        className,
      )}
    >
      {children}
    </Element>
  );
};

NavbarContainer.propTypes = {
  align: PropTypes.oneOf(['left', 'right']),
};

NavbarContainer.defaultProps = {
  align: 'left',
};

export default NavbarContainer;
