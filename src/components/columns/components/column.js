import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CONSTANTS from '../constants';

const sizes = [null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  .concat(Object.keys(CONSTANTS.SIZES).map(key => CONSTANTS.SIZES[key]));

export default class Column extends PureComponent {
  static displayName = 'Columns.Column'
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.shape({}),
    /**
     * The size of the column. the maximun size of a row is 12
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
    /**
     * @deprecated Please use mobile.size prop
     */
    mobileSize: PropTypes.oneOf(sizes),

    /**
     * @deprecated Please use table.size prop
     */
    tabletSize: PropTypes.oneOf(sizes),
    /**
     * @deprecated Please use desktop.size prop
     */
    desktopSize: PropTypes.oneOf(sizes),
    /**
     * @deprecated Please use widescreen.size prop
     */
    widescreenSize: PropTypes.oneOf(sizes),
    /**
     * @deprecated Please use fullhd.size prop
     */
    fullhdSize: PropTypes.oneOf(sizes),
    /**
     * @deprecated Please use mobile.offset prop
     */
    mobileOffset: PropTypes.oneOf(sizes),
    /**
     * @deprecated Please use tablet.offset prop
     */
    tabletOffset: PropTypes.oneOf(sizes),
    /**
     * @deprecated Please use desktop.offset prop
     */
    desktopOffset: PropTypes.oneOf(sizes),
    /**
     * @deprecated Please use widescreen.offset prop
     */
    widescreenOffset: PropTypes.oneOf(sizes),
    /**
     * @deprecated Please use fullhd.offset prop
     */
    fullhdOffset: PropTypes.oneOf(sizes),
  }

  static defaultProps = {
    children: null,
    className: '',
    style: {},
    size: null,
    offset: null,
    narrow: false,
    mobile: {
      size: null,
      offset: null,
      narrow: false,
    },
    tablet: {
      size: null,
      offset: null,
      narrow: false,
    },
    desktop: {
      size: null,
      offset: null,
      narrow: false,
    },
    widescreen: {
      size: null,
      offset: null,
      narrow: false,
    },
    fullhd: {
      size: null,
      offset: null,
      narrow: false,
    },
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
      size,
      offset,
      narrow,
      mobile,
      tablet,
      desktop,
      widescreen,
      fullhd,
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
      ...props
    } = this.props;

    if (mobileSize || tabletSize || desktopSize || widescreenSize || fullhdSize || mobileOffset || tabletOffset || desktopOffset || widescreenOffset || fullhdOffset) {
      // eslint-disable-next-line no-console
      console.warn('DEPRECATION Warning: The props: mobileSize tabletSize desktopSize widescreenSize fullhdSize mobileOffset tabletOffset desktopOffset widescreenOffset fullhdOffset are deprecated, please use the mobile.size... alternatives');
    }

    return (
      <div
        {...props}
        className={classNames(className, 'column', {
        [`is-${size}`]: size,
        [`is-${mobile.size || mobileSize}-mobile`]: mobile.size || mobileSize,
        [`is-${tablet.size || tabletSize}-tablet`]: tablet.size || tabletSize,
        [`is-${desktop.size || desktopSize}-desktop`]: desktop.size || desktopSize,
        [`is-${widescreen.size || widescreenSize}-widescreen`]: widescreen.size || widescreenSize,
        [`is-${fullhd.size || fullhdSize}-fullhd`]: fullhd.size || fullhdSize,
        [`is-offset-${mobile.offset || mobileOffset}-mobile`]: mobile.offset || mobileOffset,
        [`is-offset-${tablet.offset || tabletOffset}-tablet`]: tablet.offset || tabletOffset,
        [`is-offset-${desktop.offset || desktopOffset}-desktop`]: desktop.offset || desktopOffset,
        [`is-offset-${widescreen.offset || widescreenOffset}-widescreen`]: widescreen.offset || widescreenOffset,
        [`is-offset-${fullhd.offset || fullhdOffset}-fullhd`]: fullhd.offset || fullhdOffset,
        [`is-offset-${offset}`]: offset,
        'is-narrow': narrow,
        'is-narrow-mobile': mobile.narrow,
        'is-narrow-tablet': tablet.narrow,
        'is-narrow-desktop': desktop.narrow,
        'is-narrow-widescreen': widescreen.narrow,
        'is-narrow-fullhd': fullhd.narrow,
      })}
      >
        {children}
      </div>
    );
  }
}
