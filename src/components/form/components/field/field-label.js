import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


export default class FieldLabel extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    /**
     * the Html or React element you want to use to render this component
     */
    renderAs: PropTypes.string,
    /**
     * The size of button using the classes from Bulma
     */
    size: PropTypes.oneOf(['small', 'normal', 'medium', 'large']),
  }

  static defaultProps = {
    children: null,
    className: '',
    style: {},
    renderAs: 'div',
    size: null,
  }

  render() {
    const {
      children,
      className,
      style,
      renderAs,
      size,
    } = this.props;
    const Element = renderAs;

    return (
      <Element
        style={style}
        className={classnames('field-label', className, {
          [`is-${size}`]: size,
        })}
      >
        {children}
      </Element>
    );
  }
}
