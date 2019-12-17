import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CONSTANTS from '../constants';
import modifiers from '../../../modifiers';
import Element from '../../element';

const sizes = [null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].concat(
  Object.keys(CONSTANTS.SIZES).map(key => CONSTANTS.SIZES[key]),
);

const Column = ({
  children,
  className,
  size,
  offset,
  narrow,
  mobile,
  tablet,
  desktop,
  widescreen,
  fullhd,
  touch,
  ...props
}) => (
  <Element
    {...props}
    className={classNames(className, 'column', {
      [`is-${size}`]: size,
      [`is-${touch.size}-mobile`]: touch.size,
      [`is-${mobile.size}-mobile`]: mobile.size,
      [`is-${tablet.size}-tablet`]: tablet.size,
      [`is-${desktop.size}-desktop`]: desktop.size,
      [`is-${widescreen.size}-widescreen`]: widescreen.size,
      [`is-${fullhd.size}-fullhd`]: fullhd.size,
      [`is-offset-${touch.offset}-mobile`]: touch.offset,
      [`is-offset-${mobile.offset}-mobile`]: mobile.offset,
      [`is-offset-${tablet.offset}-tablet`]: tablet.offset,
      [`is-offset-${desktop.offset}-desktop`]: desktop.offset,
      [`is-offset-${widescreen.offset}-widescreen`]: widescreen.offset,
      [`is-offset-${fullhd.offset}-fullhd`]: fullhd.offset,
      [`is-offset-${offset}`]: offset,
      'is-narrow': narrow,
      'is-narrow-touch': touch.narrow,
      'is-narrow-mobile': mobile.narrow,
      'is-narrow-tablet': tablet.narrow,
      'is-narrow-desktop': desktop.narrow,
      'is-narrow-widescreen': widescreen.narrow,
      'is-narrow-fullhd': fullhd.narrow,
    })}
  >
    {children}
  </Element>
);

Column.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  /**
   * The size of the column. the maximum size of a row is 12
   */
  size: PropTypes.oneOf(sizes),
  /**
   * Create horizontal space around Column elements
   */
  offset: PropTypes.oneOf(sizes),
  /**
   * If you want a column to only take the space it needs, use the narrow modifier. The other column(s) will fill up the remaining space.
   */
  narrow: PropTypes.bool,
  /**
   * Size, Offset and Narrow props for Mobile devices (Up to 768px)
   */
  touch: PropTypes.shape({
    size: PropTypes.oneOf(sizes),
    offset: PropTypes.oneOf(sizes),
    narrow: PropTypes.bool,
  }),
  /**
   * Size, Offset and Narrow props for Mobile devices (Up to 768px)
   */
  mobile: PropTypes.shape({
    size: PropTypes.oneOf(sizes),
    offset: PropTypes.oneOf(sizes),
    narrow: PropTypes.bool,
  }),
  /**
   * Size, Offset and Narrow props for Tablet devices (Between 769px and 1023px)
   */
  tablet: PropTypes.shape({
    size: PropTypes.oneOf(sizes),
    offset: PropTypes.oneOf(sizes),
    narrow: PropTypes.bool,
  }),
  /**
   * Size, Offset and Narrow props for Desktop devices (Between 1024px and 1215px)
   */
  desktop: PropTypes.shape({
    size: PropTypes.oneOf(sizes),
    offset: PropTypes.oneOf(sizes),
    narrow: PropTypes.bool,
  }),
  /**
   * Size, Offset and Narrow props for WideScreen devices (Between 1216px and 1407px)
   */
  widescreen: PropTypes.shape({
    size: PropTypes.oneOf(sizes),
    offset: PropTypes.oneOf(sizes),
    narrow: PropTypes.bool,
  }),
  /**
   * Size, Offset and Narrow props for FullHD devices (1408px and above)
   */
  fullhd: PropTypes.shape({
    size: PropTypes.oneOf(sizes),
    offset: PropTypes.oneOf(sizes),
    narrow: PropTypes.bool,
  }),
};

Column.defaultProps = {
  ...modifiers.defaultProps,
  children: undefined,
  className: undefined,
  style: undefined,
  size: undefined,
  offset: undefined,
  narrow: undefined,
  mobile: {
    size: undefined,
    offset: undefined,
    narrow: undefined,
  },
  touch: {
    size: undefined,
    offset: undefined,
    narrow: undefined,
  },
  tablet: {
    size: undefined,
    offset: undefined,
    narrow: undefined,
  },
  desktop: {
    size: undefined,
    offset: undefined,
    narrow: undefined,
  },
  widescreen: {
    size: undefined,
    offset: undefined,
    narrow: undefined,
  },
  fullhd: {
    size: undefined,
    offset: undefined,
    narrow: undefined,
  },
};

export default Column;
