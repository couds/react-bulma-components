import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CONSTANTS from '../../constants';

const colors = [null].concat(Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]));

export default class Button extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    href: PropTypes.string,
    hrefAttr: PropTypes.string,
    style: PropTypes.shape({}),
    renderAs: PropTypes.oneOfType([
      PropTypes.oneOf(['a', 'button']),
      PropTypes.func,
    ]),
    onClick: PropTypes.func,
    color: PropTypes.oneOf(colors),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    state: PropTypes.oneOf(['hover', 'focus', 'active', 'loading']),
    outlined: PropTypes.bool,
    inverted: PropTypes.bool,
    submit: PropTypes.bool,
    reset: PropTypes.bool,
    loading: PropTypes.bool,
    fullwidth: PropTypes.bool,
    disabled: PropTypes.bool,
    remove: PropTypes.bool,
    isStatic: PropTypes.bool,
    text: PropTypes.bool,
  }

  static defaultProps = {
    children: null,
    className: '',
    href: '',
    hrefAttr: '',
    style: {},
    renderAs: 'a',
    onClick: () => null,
    color: null,
    size: null,
    state: null,
    outlined: false,
    inverted: false,
    submit: false,
    reset: false,
    fullwidth: false,
    loading: false,
    disabled: false,
    remove: false,
    isStatic: false,
    text: false,
  }

  render() {
    const {
      children,
      className,
      renderAs,
      color,
      size,
      outlined,
      inverted,
      state,
      submit,
      reset,
      fullwidth,
      loading,
      disabled,
      remove,
      href,
      hrefAttr,
      isStatic,
      onClick,
      text,
      ...props
    } = this.props;
    let Element = isStatic ? 'span' : renderAs;
    const otherProps = {};
    if (href) {
      otherProps[renderAs === 'a' ? 'href' : hrefAttr] = href;
      if (renderAs !== 'a' && !hrefAttr) {
        // eslint-disable-next-line no-console
        console.error('warning: if renderAs is different the anchor (a), hrefAttr is required. Check Button props');
      }
    }
    if (submit) {
      Element = 'button';
      otherProps.type = 'submit';
    }
    if (reset) {
      Element = 'button';
      otherProps.type = 'reset';
    }

    return (
      <Element
        tabIndex={disabled ? -1 : 0}
        {...props}
        {...otherProps}
        disabled={disabled}
        onClick={disabled ? undefined : onClick}
        className={classnames(className, {
          [`is-${color}`]: color,
          [`is-${size}`]: size,
          [`is-${state}`]: state,
          'is-outlined': outlined,
          'is-inverted': inverted,
          'is-fullwidth': fullwidth,
          'is-loading': loading,
          'is-text': text,
          delete: remove,
          button: !remove,
        })}
      >
        {children}
      </Element>
    );
  }
}
