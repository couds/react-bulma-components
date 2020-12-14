import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CONSTANTS from '../../constants';
import Column from './components/column';
import COLUMN_CONSTANTS from './constants';
import modifiers from '../../modifiers';
import Element from '../element';

const breakpoints = [null].concat(Object.values(CONSTANTS.BREAKPOINTS));

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
  /**
   * Specifies gap values between columns on different breakpoints
   */
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
   * Defines at what breakpoint upwards the column layout should be activated. Any viewport smaller
   * than the specified breakpoint will cause `<Columns.Column>` to stack on top of each other.
   */
  breakpoint: PropTypes.oneOf(breakpoints),
  /**
   * Whether there should be **no gap** between columns
   */
  gapless: PropTypes.bool,
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
  children: PropTypes.node,
  /**
   * Additional CSS classes to be passed to `<Columns />`.
   * They will sit alongside pre-applied Bulma classes.
   */
  className: PropTypes.string,
  style: PropTypes.shape({}),
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
