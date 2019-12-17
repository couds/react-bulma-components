import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import MenuList from './components/list';
import modifiers from '../../modifiers';
import Element from '../element';
import renderAsShape from '../../modifiers/render-as';

const Menu = ({ className, ...props }) => (
  <Element {...props} className={classnames('menu', className)} />
);

Menu.List = MenuList;

Menu.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: renderAsShape,
};

Menu.defaultProps = {
  ...modifiers.defaultProps,
  className: undefined,
  renderAs: 'aside',
};

export default Menu;
