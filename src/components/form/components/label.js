import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Label extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    htmlFor: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  }

  static defaultProps = {
    children: null,
    className: '',
    style: {},
    size: null,
    htmlFor: '',
  }

  render() {
    const {
      children,
      className,
      style,
      size,
      htmlFor,
    } = this.props;

    return (
      <label
        htmlFor={htmlFor}
        style={style}
        className={classnames('label', className, {
          [`is-${size}`]: size,
        })}
      >
        {children}
      </label>
    );
  }
}
