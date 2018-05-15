import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Label extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.shape({}),
    htmlFor: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  }

  static defaultProps = {
    children: null,
    className: '',
    style: {},
    size: null,
    htmlFor: null,
  }

  render() {
    const {
      children,
      className,
      size,
      ...props
    } = this.props;

    return (
      <label
        {...props}
        className={classnames('label', className, {
          [`is-${size}`]: size,
        })}
      >
        {children}
      </label>
    );
  }
}
