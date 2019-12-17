import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CONSTANTS from '../../constants';
import Column from './components/column';
import COLUMN_CONSTANTS from './constants';
import modifiers from '../../modifiers';
import Element from '../element';

const breakpoints = [null].concat(
  Object.keys(CONSTANTS.BREAKPOINTS).map(key => CONSTANTS.BREAKPOINTS[key]),
);

const sizes = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const Columns = ({
  className,
  breakpoint,
  gapless,
  multiline,
  centered,
  vCentered,
  variableGap,
  ...props
}) => (
  <Element
    {...props}
    className={classNames(className, 'columns', {
      [`is-${breakpoint}`]: breakpoint,
      'is-gapless': gapless,
      'is-multiline': multiline,
      'is-centered': centered,
      'is-vcentered': vCentered,
      'is-variable': Object.keys(variableGap).length > 0,
      ...(variableGap
        ? {
            [`is-${variableGap.touch}-touch`]: variableGap.touch,
            [`is-${variableGap.mobile}-mobile`]: variableGap.mobile,
            [`is-${variableGap.tablet}-tablet`]: variableGap.tablet,
            [`is-${variableGap.desktop}-desktop`]: variableGap.desktop,
            [`is-${variableGap.widescreen}-widescreen`]: variableGap.widescreen,
            [`is-${variableGap.fullhd}-fullhd`]: variableGap.fullhd,
          }
        : {}),
    })}
  />
);

Columns.Column = Column;

Columns.CONSTANTS = COLUMN_CONSTANTS;

Columns.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  variableGap: PropTypes.shape({
    ...Object.values(CONSTANTS.BREAKPOINTS).reduce(
      (values, breakpoint) => ({
        ...values,
        [breakpoint]: PropTypes.oneOf(sizes),
      }),
      {},
    ),
  }),
  /**
   * Breakpoint where columns become stacked.
   */
  breakpoint: PropTypes.oneOf(breakpoints),
  /**
   * `true` to remove space between columns
   */
  gapless: PropTypes.bool,
  /**
   * `true` if you want to use more than one line if you add more column elements that would fit in a single row.
   */
  multiline: PropTypes.bool,
  /**
   * `true` you want the columns inside to be horizontaly centered
   */
  centered: PropTypes.bool,
  /**
   * `true` if you want to vertically align columns
   */
  vCentered: PropTypes.bool,
};

Columns.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: undefined,
  style: undefined,
  breakpoint: undefined,
  gapless: false,
  centered: false,
  vCentered: false,
  multiline: true,
  variableGap: {},
};

export default Columns;
