import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CONSTANTS from '../constants';


import GLOBAL_CONSTANTS from '../../../constants';

const sizes = [null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  .concat(Object.keys(CONSTANTS.SIZES).map(key => CONSTANTS.SIZES[key]));

const breakpoints = [true, false]
  .concat(Object.keys(GLOBAL_CONSTANTS.BREAKPOINTS).map(key => GLOBAL_CONSTANTS.BREAKPOINTS[key]));

export default class Column extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    size: PropTypes.oneOf(sizes),
    offset: PropTypes.oneOf(sizes),
    narrow: PropTypes.oneOf(breakpoints),
    mobileSize: PropTypes.oneOf(sizes),
    tabletSize: PropTypes.oneOf(sizes),
    desktopSize: PropTypes.oneOf(sizes),
    widescreenSize: PropTypes.oneOf(sizes),
    fullhdSize: PropTypes.oneOf(sizes),
    mobileOffset: PropTypes.oneOf(sizes),
    tabletOffset: PropTypes.oneOf(sizes),
    desktopOffset: PropTypes.oneOf(sizes),
    widescreenOffset: PropTypes.oneOf(sizes),
    fullhdOffset: PropTypes.oneOf(sizes),
  }

  static defaultProps = {
    children: null,
    className: '',
    style: {},
    size: null,
    offset: null,
    narrow: null,
    mobileSize: null,
    tabletSize: null,
    desktopSize: null,
    widescreenSize: null,
    fullhdSize: null,
    mobileOffset: null,
    tabletOffset: null,
    desktopOffset: null,
    widescreenOffset: null,
    fullhdOffset: null,
  }

  render() {
    const {
      children,
      className,
      style,
      size,
      offset,
      narrow,
      mobileSize,
      tabletSize,
      desktopSize,
      widescreenSize,
      fullhdSize,
      mobileOffset,
      tabletOffset,
      desktopOffset,
      widescreenOffset,
      fullhdOffset,
    } = this.props;
    return (
      <div
        className={classNames(className, 'column', {
        [`is-${size}`]: size,
        [`is-${mobileSize}-mobile`]: mobileSize,
        [`is-${tabletSize}-tablet`]: tabletSize,
        [`is-${desktopSize}-desktop`]: desktopSize,
        [`is-${widescreenSize}-widescreen`]: widescreenSize,
        [`is-${fullhdSize}-fullhd`]: fullhdSize,
        [`is-${mobileOffset}-mobile`]: mobileOffset,
        [`is-${tabletOffset}-tablet`]: tabletOffset,
        [`is-${desktopOffset}-desktop`]: desktopOffset,
        [`is-${widescreenOffset}-widescreen`]: widescreenOffset,
        [`is-${fullhdOffset}-fullhd`]: fullhdOffset,
        [`is-offset-${offset}`]: offset,
        [`is-narrow${typeof narrow !== 'boolean' ? `-${narrow}` : ''}`]: narrow,
      })}
        style={style}
      >
        {children}
      </div>
    );
  }
}
