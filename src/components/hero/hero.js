import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CONSTANTS from '../../constants';

import HeroHead from './components/hero-head';
import HeroBody from './components/hero-body';
import HeroFooter from './components/hero-footer';

const colors = [null].concat(Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]));

export default class Hero extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    renderAs: PropTypes.string,
    /**
     * The color of the element using the classes from Bulma
     */
    color: PropTypes.oneOf(colors),
    /**
     * **Experimental**: True to use gradient
     */
    gradient: PropTypes.bool,
    /**
     * Size of the element using the bulma classes
     */
    size: PropTypes.oneOf(['medium', 'large', 'fullheight']),
  }

  static defaultProps = {
    children: null,
    className: '',
    style: {},
    renderAs: 'section',
    color: null,
    gradient: false,
    size: null,
  }

  static Head = HeroHead
  static Body = HeroBody
  static Footer = HeroFooter

  render() {
    const {
      children,
      className,
      style,
      renderAs,
      color,
      gradient,
      size,
    } = this.props;

    const Element = renderAs;
    return (
      <Element
        style={style}
        className={classnames('hero', className, {
          [`is-${color}`]: color,
          [`is-${size}`]: size,
          'is-bold': gradient,
        })}
      >
        {children}
      </Element>
    );
  }
}
