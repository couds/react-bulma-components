import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


export default class Control extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    /**
     * the Html or React element you want to use to render this component
     */
    renderAs: PropTypes.string,
    /**
     * Is the button should be full width
     */
    fullwidth: PropTypes.bool,
    /**
     * True if this control will have an icon on the left
     */
    iconLeft: PropTypes.bool,
    /**
     * True if this control will have an icon on the Right
     */
    iconRight: PropTypes.bool,
    /**
     * Is the button should be displayed as loading
     */
    loading: PropTypes.bool,
    /**
     * The size of button using the classes from Bulma
     */
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
