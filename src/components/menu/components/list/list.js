import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
/* eslint-disable-next-line import/no-cycle */
import MenuListItem from './components/item';

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
    <ul className={classnames('menu-list', className)} {...props} />
  </React.Fragment>
);

MenuList.Item = MenuListItem;

MenuList.propTypes = {
  className: PropTypes.string,
  title: PropTypes.node,
};

MenuList.defaultProps = {
  className: '',
  title: null,
};

export default MenuList;
