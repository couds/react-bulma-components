import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
/* eslint-disable-next-line import/no-cycle */
import MenuListItem from './components/item';
import modifiers from '../../../../modifiers';
import Element from '../../../element';

const MenuList = ({
  className,
  title,
  ...props
}) => (
  <React.Fragment>
    {
        title
        && (
        <p className="menu-label">
          {title}
        </p>
        )
      }
    <Element renderAs="ul" className={classnames('menu-list', className)} {...props} />
  </React.Fragment>
);

MenuList.Item = MenuListItem;

MenuList.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  title: PropTypes.node,
};

MenuList.defaultProps = {
  ...modifiers.defaultProps,
  className: '',
  title: null,
};

export default MenuList;
