import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const NavbarContainer = ({
  className,
  renderAs,
  children,
  position,
  ...props
}) => {
  const Element = renderAs;
  return (
    <Element
      {...props}
      className={classnames({
        [`navbar-${position}`]: position,
      }, className)}
    >
      {children}
    </Element>
  );
};

NavbarContainer.propTypes = {
  style: PropTypes.shape({}),
  className: PropTypes.string,
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  position: PropTypes.oneOf(['start', 'end']),
};

NavbarContainer.defaultProps = {
  style: {},
  className: '',
  children: null,
  renderAs: 'div',
  position: 'start',
};

export default NavbarContainer;
