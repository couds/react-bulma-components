import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
/* eslint-disable-next-line import/no-cycle */
import MenuListItem from './components/item';

import Element from '../../../element';

const MenuList = ({ className, title, ...props }) => {
  return (
    <>
      {title && <p className="menu-label">{title}</p>}
      <Element className={classnames('menu-list', className)} {...props} />
    </>
  );
};

MenuList.Item = MenuListItem;

MenuList.propTypes = {
  /**
   * The title of this list in the menu.
   */
  title: PropTypes.node,
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

MenuList.defaultProps = {
  renderAs: 'ul',
};

export default MenuList;
