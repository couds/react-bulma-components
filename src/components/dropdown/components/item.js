import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class DropdownItem extends PureComponent {
  static displayName = 'Dropdown.Item'
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    value: PropTypes.any.isRequired,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    active: false,
    onClick: undefined,
    children: null,
  }

  render() {
    const { active, children, value, ...props } = this.props;
    return (
      <div
        title={value}
        {...props}
        role="presentation"
        className={classnames('dropdown-item', {
          'is-active': active,
        })}
      >
        {children}
      </div>
    );
  }
}
