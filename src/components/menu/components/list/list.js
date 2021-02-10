import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
/* eslint-disable-next-line import/no-cycle */
import MenuListItem from './components/item';
import modifiers from '../../../../modifiers';
import Element from '../../../element';

const MenuList = ({ className, title, ...props }) => (
  <>
    {title && <p className="menu-label">{title}</p>}
    <Element
      renderAs="ul"
      className={classnames('menu-list', className)}
      {...props}
    />
  </>
);

MenuList.Item = MenuListItem;

MenuList.propTypes = {
  ...modifiers.propTypes,
  /**
   * Additional CSS classes to be passed to `Menu.List`.
   * They will sit alongside pre-applied Bulma classes.
   */
  className: PropTypes.string,
  /**
   * The title of this list in the menu.
   */
  title: PropTypes.node,
};

MenuList.defaultProps = {
  ...modifiers.defaultProps,
  className: undefined,
  title: undefined,
};

export default MenuList;
