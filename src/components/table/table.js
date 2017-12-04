import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Table extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    size: PropTypes.oneOf(['fullwidth', 'narrow']),
    striped: PropTypes.bool,
    bordered: PropTypes.bool,
  }

  static defaultProps = {
    children: null,
    className: '',
    style: {},
    size: 'fullwidth',
    striped: true,
    bordered: false,
  }

  render() {
    const {
      children,
      className,
      style,
      size,
      striped,
      bordered,
    } = this.props;
    return (
      <table
        style={style}
        className={classnames('table', className, {
          [`is-${size}`]: size,
          'is-bordered': bordered,
          'is-striped': striped,
        })}
      >
        {children}
      </table>
    );
  }
}
