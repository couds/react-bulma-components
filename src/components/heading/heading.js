import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Heading extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    /**
     * the Html or React element you want to use to render this component
     */
    renderAs: PropTypes.string,
    /**
     * Title Size
     */
    size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
    /**
     * True if is a subtitle
     */
    subtitle: PropTypes.bool,
    /**
     * True to disable Title and use Heading class
     */
    heading: PropTypes.bool,
    /**
     * True to add spacing between Title and Subtitle
     */
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
      style,
      renderAs,
      size,
      subtitle,
      spaced,
      heading,
    } = this.props;

    const Element = renderAs;
    return (
      <Element
        style={style}
        className={classnames(className, {
          title: !subtitle && !heading,
          subtitle: !heading,
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
