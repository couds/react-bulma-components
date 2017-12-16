import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Section extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    size: PropTypes.oneOf(['medium', 'large']),
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
        className={classnames('section', className, {
          [`is-${size}`]: size,
        })}
      >
        {children}
      </Element>
    );
  }
}
