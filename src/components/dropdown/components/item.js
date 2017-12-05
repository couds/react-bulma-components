import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class DropdownItem extends PureComponent {
  static propTypes = {
    /**
     * @ignore
     */
    active: PropTypes.bool,
    children: PropTypes.node,
    /**
     * Value of this item
     */
    value: PropTypes.any.isRequired,
    /**
     * @ignore
     */
    onClick: PropTypes.func,
  }

  static defaultProps = {
    active: false,
    onClick: null,
    children: null,
  }

  render() {
    const { active, children, value, onClick } = this.props;
    return (
      <div
        title={value}
        onClick={onClick}
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
