import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import MenuListItem from './components/item';

export default class MenuList extends PureComponent {
  static displayName = 'Menu.List'

  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.node,
  }

  static defaultProps = {
    className: '',
    title: null,
  }

  static Item = MenuListItem;

  render() {
    const {
      className,
      title,
      ...props
    } = this.props;
    return (
      <React.Fragment>
        {
          title &&
          <p className="menu-label">
            {title}
          </p>
        }
        <ul className={classnames('menu-list', className)} {...props} />
      </React.Fragment>
    );
  }
}
