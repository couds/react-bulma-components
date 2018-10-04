import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CONSTANTS from '../../constants';
import Column from './components/column';
import COLUMN_CONSTANTS from './constants';
import modifiers from '../../modifiers';
import Element from '../element';

const breakpoints = [null].concat(Object.keys(CONSTANTS.BREAKPOINTS).map(key => CONSTANTS.BREAKPOINTS[key]));

const Columns = ({
  className,
  breakpoint,
  gapless,
  multiline,
  centered,
  ...props
}) => (
  <Element
    {...props}
    className={classNames(className, 'columns', {
      [`is-${breakpoint}`]: breakpoint,
      'is-gapless': gapless,
      'is-multiline': multiline,
      'is-centered': centered,
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
};

Columns.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
  breakpoint: null,
  gapless: false,
  centered: false,
  multiline: true,
};

export default Columns;
