import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import MenuList from './components/list';
import modifiers from '../../modifiers';

const Menu = ({
  className,
  renderAs,
  ...allProps
}) => {
  const Element = renderAs;
  const props = modifiers.clean(allProps);
  return (
    <Element
      {...props}
      className={classnames('menu', modifiers.classnames(allProps), className)}
    />
  );
};

Menu.List = MenuList;

Menu.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
};

Menu.defaultProps = {
  ...modifiers.defaultProps,
  className: '',
  renderAs: 'aside',
};

export default Menu;
