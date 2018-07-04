import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';

const NavbarLink = ({
  className,
  renderAs,
  children,
  ...allProps
}) => {
  const Element = renderAs;
  const props = modifiers.clean(allProps);
  return (
    <Element
      {...props}
      className={classnames('navbar-link', modifiers.classnames(allProps), className)}
    >
      {children}
    </Element>
  );
};


NavbarLink.propTypes = {
  ...modifiers.propTypes,
  style: PropTypes.shape({}),
  className: PropTypes.string,
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

NavbarLink.defaultProps = {
  ...modifiers.defaultProps,
  style: {},
  className: '',
  children: null,
  renderAs: 'span',
};

export default NavbarLink;
