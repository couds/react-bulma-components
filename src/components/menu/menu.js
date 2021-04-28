import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import MenuList from './components/list';

import Element from '../element';

const Menu = ({ className, ...props }) => {
  return <Element {...props} className={classnames('menu', className)} />;
};

Menu.List = MenuList;

Menu.propTypes = {
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

Menu.defaultProps = {
  renderAs: 'aside',
};

export default Menu;
