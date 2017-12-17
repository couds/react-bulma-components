import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


export default class FieldLabel extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.shape({}),
    renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
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
