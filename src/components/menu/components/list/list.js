import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../../modifiers';
import { Element } from '../../../element';
import { MenuListItem } from './components/item';

export const MenuList = React.forwardRef(({ className, title, ...props }, ref) => (
  <React.Fragment>
    {title && <p className="menu-label">{title}</p>}
    <Element ref={ref} renderAs="ul" className={cn('menu-list', className)} {...props} />
  </React.Fragment>
));

MenuList.Item = MenuListItem;

MenuList.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  title: PropTypes.node
};

MenuList.defaultProps = {
  ...modifiers.defaultProps,
  className: '',
  title: null
};
