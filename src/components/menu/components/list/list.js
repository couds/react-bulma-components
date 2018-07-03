import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
/* eslint-disable-next-line import/no-cycle */
import MenuListItem from './components/item';

export default class MenuList extends PureComponent {
  static Item = MenuListItem;

  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.node,
  }

  static defaultProps = {
    className: '',
    title: null,
  }

  render() {
    const {
      className,
      title,
      ...props
    } = this.props;
    return (
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
  }
}
