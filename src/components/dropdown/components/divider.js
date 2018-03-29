import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class DropdownDivider extends PureComponent {
  static displayName = 'Dropdown.Divider'
  static propTypes = {
    style: PropTypes.shape({}),
    className: PropTypes.string,
  }

  static defaultProps = {
    style: {},
    className: '',
  }

  render() {
    const { className, ...props } = this.props;
    return (
      <hr
        {...props}
        className={classnames('dropdown-divider', className)}
      />
    );
  }
}
