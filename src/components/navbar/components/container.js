import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';
import Element from '../../element';
import renderAsShape from '../../../modifiers/render-as';

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
  ...modifiers.propTypes,
  style: PropTypes.shape({}),
  className: PropTypes.string,
  children: PropTypes.node,
  renderAs: renderAsShape,
  position: PropTypes.oneOf(['start', 'end']),
};

NavbarContainer.defaultProps = {
  ...modifiers.defaultProps,
  style: undefined,
  className: undefined,
  children: null,
  renderAs: 'div',
  position: 'start',
};

export default NavbarContainer;
