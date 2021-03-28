import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import MenuList from './components/list';

import Element from '../element';
import renderAsShape from '../../modifiers/render-as';

const Menu = ({ className, ...props }) => (
  <Element {...props} className={classnames('menu', className)} />
);

Menu.List = MenuList;

Menu.propTypes = {
  ...Element.propTypes,
  /**
   * Additional CSS classes to be passed to `Menu`.
   * They will sit alongside pre-applied Bulma classes.
   */
  className: PropTypes.string,
  renderAs: renderAsShape,
};

Menu.defaultProps = {
  ...Element.defaultProps,
  className: undefined,
  renderAs: 'aside',
};

export default Menu;
