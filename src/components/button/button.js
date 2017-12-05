import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CONSTANTS from '../../constants';

const colors = [''].concat(Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]));

export default class Button extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    /**
     * Other classes this component will have
     */
    className: PropTypes.string,
    /**
     * Is button is a link the url where this link goes
     */
    href: PropTypes.string,
    /**
     * if the element is not an `a` html anchor the
     * value needs to be equivalent attribute of the href
     * (ex: For `Link` component from react-router this attribute need to be set to `To`)
     */
    hrefAttr: PropTypes.string,
    /**
     * the Html or React element you want to use to render this component
     */
    renderAs: PropTypes.oneOfType([
      PropTypes.oneOf(['a', 'button']),
      PropTypes.func,
    ]),
    /**
     * The color of button using the classes from Bulma
     */
    color: PropTypes.oneOf(colors),
    /**
     * The size of button using the classes from Bulma
     */
    size: PropTypes.oneOf(['', 'small', 'medium', 'large']),
    /**
     * The state of button using the classes from Bulma
     */
    state: PropTypes.oneOf(['', 'hovered', 'focused', 'active']),
    /**
     * Is the button should be outlined
     */
    outlined: PropTypes.bool,
    /**
     * Is the button should be inverted
     */
    inverted: PropTypes.bool,
    /**
     * Is the button is a from submit button
     */
    submit: PropTypes.bool,
    /**
     * Is the button is a from reset button
     */
    reset: PropTypes.bool,
    /**
     * Is the button should be displayed as loading
     */
    loading: PropTypes.bool,
    /**
     * Is the button should be full width
     */
    fullwidth: PropTypes.bool,
    /**
     * Is the button should be disabled
     */
    disabled: PropTypes.bool,
    /**
     * Is the button should be a remove button
     */
    remove: PropTypes.bool,
    /**
     * Is the button should be an static element (`span`)
     */
    isStatic: PropTypes.bool,
  }

  static defaultProps = {
    children: null,
    className: '',
    href: '',
    hrefAttr: 'href',
    style: {},
    renderAs: 'a',
    color: undefined,
    size: undefined,
    state: undefined,
    outlined: false,
    inverted: false,
    submit: false,
    reset: false,
    fullwidth: false,
    loading: false,
    disabled: false,
    remove: false,
    isStatic: false,
  }

  render() {
    const {
      children,
      className,
      style,
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
      ...props
    } = this.props;
    let Element = isStatic ? 'span' : renderAs;
    const otherProps = {
      [hrefAttr]: href,
    };
    if (submit) {
      Element = 'input';
      otherProps.type = 'submit';
    }
    if (reset) {
      Element = 'input';
      otherProps.type = 'reset';
    }

    return (
      <Element
        {...props}
        {...otherProps}
        style={style}
        disabled={disabled}
        className={classnames(className, {
          [`is-${color}`]: color,
          [`is-${size}`]: size,
          [`is-${state}`]: state,
          'is-outlined': outlined,
          'is-inverted': inverted,
          'is-fullwidth': fullwidth,
          'is-loading': loading,
          delete: remove,
          button: !remove,
        })}
      >
        {children}
      </Element>
    );
  }
}
