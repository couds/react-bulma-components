import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Heading extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.shape({}),
    renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
    subtitle: PropTypes.bool,
    heading: PropTypes.bool,
    spaced: PropTypes.bool,
  }

  static defaultProps = {
    children: null,
    className: '',
    style: {},
    renderAs: 'h1',
    size: null,
    subtitle: false,
    heading: false,
    spaced: false,
  }

  render() {
    const {
      children,
      className,
      renderAs,
      size,
      subtitle,
      spaced,
      heading,
      ...props
    } = this.props;

    const Element = renderAs;
    return (
      <Element
        {...props}
        className={classnames(className, {
          title: !subtitle && !heading,
          subtitle,
          heading,
          [`is-${size}`]: size,
          'is-spaced': spaced && !subtitle,
        })}
      >
        {children}
      </Element>
    );
  }
}
