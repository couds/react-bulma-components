import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Content extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    /**
     * Size of the Content using the bulma classes
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * the Html or React element you want to use to render this component
     */
    renderAs: PropTypes.string,
  }

  static defaultProps = {
    children: null,
    className: '',
    style: {},
    size: null,
    renderAs: 'div',
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
        className={classnames('content', className, {
          [`is-${size}`]: size,
        })}
      >
        {children}
      </Element>
    );
  }
}
