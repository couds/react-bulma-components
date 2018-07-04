import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import MenuList from './components/list';

const Menu = ({
  className,
  renderAs,
  ...props
}) => {
  const Element = renderAs;
  return (
    <Element
      {...props}
      className={classnames('menu', className)}
    />
  );
};

Menu.List = MenuList;

Menu.propTypes = {
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
};

Menu.defaultProps = {
  className: '',
  renderAs: 'aside',
};

export default Menu;
