import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class DropdownDivider extends PureComponent {
  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
  }

  static defaultProps = {
    style: {},
    className: '',
  }

  render() {
    const { style, className } = this.props;
    return (
      <hr
        style={style}
        className={classnames('dropdown-divider', className)}
      />
    );
  }
}
