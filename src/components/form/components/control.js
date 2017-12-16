import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


export default class Control extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    fullwidth: PropTypes.bool,
    iconLeft: PropTypes.bool,
    iconRight: PropTypes.bool,
    loading: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  }

  static defaultProps = {
    children: null,
    className: '',
    style: {},
    renderAs: 'div',
    fullwidth: false,
    iconLeft: false,
    iconRight: false,
    loading: false,
    size: null,
  }

  render() {
    const {
      children,
      className,
      style,
      renderAs,
      fullwidth,
      iconLeft,
      iconRight,
      loading,
      size,
    } = this.props;
    const Element = renderAs;

    return (
      <Element
        style={style}
        className={classnames('control', className, {
          'is-expanded': fullwidth,
          'has-icons-left': iconLeft,
          'has-icons-right': iconRight,
          'is-loading': loading,
          [`is-${size}`]: size,
        })}
      >
        {children}
      </Element>
    );
  }
}
