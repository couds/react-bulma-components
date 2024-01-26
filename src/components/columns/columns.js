import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Column from './components/column';
import COLUMN_CONSTANTS from './constants';

import Element from '../element';

const Columns = ({
  className,
  breakpoint,
  gap,
  multiline,
  centered,
  vCentered,
  variableGap,
  mobile = {},
  tablet = {},
  desktop = {},
  widescreen = {},
  fullhd = {},
  touch = {},
  ...props
}) => {
  return (
    <Element
      {...props}
      {...{ mobile, tablet, desktop, widescreen, fullhd, touch }}
      className={classNames(className, 'columns', {
        [`is-${breakpoint}`]: breakpoint,
        [`is-${gap}`]: gap !== undefined,
        'is-multiline': multiline,
        'is-centered': centered,
        'is-vcentered': vCentered,
        'is-variable':
          gap !== undefined ||
          [touch, mobile, tablet, desktop, widescreen, fullhd].find((b) => {
            return b.gap !== undefined;
          }),
        [`is-${touch.gap}-touch`]: touch.gap !== undefined,
        [`is-${mobile.gap}-mobile`]: mobile.gap !== undefined,
        [`is-${tablet.gap}-tablet`]: tablet.gap !== undefined,
        [`is-${desktop.gap}-desktop`]: desktop.gap !== undefined,
        [`is-${widescreen.gap}-widescreen`]: widescreen.gap !== undefined,
        [`is-${fullhd.gap}-fullhd`]: fullhd.gap !== undefined,
      })}
    />
  );
};

Columns.Column = Column;

Columns.CONSTANTS = COLUMN_CONSTANTS;

Columns.propTypes = {
  touch: PropTypes.shape({
    gap: PropTypes.oneOfType([
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8]),
      PropTypes.number,
      PropTypes.string,
    ]),
  }),
  /**
   * Size, Offset and Narrow props for Mobile devices (This props are merge with the default responsive props)
   */
  mobile: PropTypes.shape({
    gap: PropTypes.oneOfType([
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8]),
      PropTypes.number,
      PropTypes.string,
    ]),
  }),
  /**
   * Size, Offset and Narrow props for Tablet devices (This props are merge with the default responsive props)
   */
  tablet: PropTypes.shape({
    gap: PropTypes.oneOfType([
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8]),
      PropTypes.number,
      PropTypes.string,
    ]),
  }),
  /**
   * Size, Offset and Narrow props for Desktop devices (This props are merge with the default responsive props)
   */
  desktop: PropTypes.shape({
    gap: PropTypes.oneOfType([
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8]),
      PropTypes.number,
      PropTypes.string,
    ]),
  }),
  /**
   * Size, Offset and Narrow props for WideScreen devices (This props are merge with the default responsive props)
   */
  widescreen: PropTypes.shape({
    gap: PropTypes.oneOfType([
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8]),
      PropTypes.number,
      PropTypes.string,
    ]),
  }),
  /**
   * Size, Offset and Narrow props for FullHD devices (This props are merge with the default responsive props)
   */
  fullhd: PropTypes.shape({
    gap: PropTypes.oneOfType([
      PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8]),
      PropTypes.number,
      PropTypes.string,
    ]),
  }),
  /**
   * Default gap props
   */
  gap: PropTypes.oneOfType([
    PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8]),
    PropTypes.number,
    PropTypes.string,
  ]),
  /**
   * Defines at what breakpoint upwards the column layout should be activated. Any viewport smaller
   * than the specified breakpoint will cause `<Columns.Column>` to stack on top of each other.
   */
  breakpoint: PropTypes.oneOf([
    'touch',
    'mobile',
    'tablet',
    'desktop',
    'widescreen',
    'fullhd',
  ]),
  /**
   * Whether you want to add more column elements than would fit in a single row.
   * [Official documentation](https://bulma.io/documentation/columns/options/#multiline).
   */
  multiline: PropTypes.bool,
  /**
   * Whether columns should be **horizontally centered** inside `<Columns />`
   */
  centered: PropTypes.bool,
  /**
   * Whether columns should be **vertically centered** inside `<Columns />`
   */
  vCentered: PropTypes.bool,
};

Columns.defaultProps = {
  multiline: true,
};

export default Columns;
