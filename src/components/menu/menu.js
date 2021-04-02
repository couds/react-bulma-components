import React from 'react';
import classnames from 'classnames';
import MenuList from './components/list';

import Element from '../element';

const Menu = ({ className, ...props }) => (
  <Element {...props} className={classnames('menu', className)} />
);

Menu.List = MenuList;

Menu.propTypes = {
  ...Element.propTypes,
};

Menu.defaultProps = {
  renderAs: 'aside',
};

export default Menu;
