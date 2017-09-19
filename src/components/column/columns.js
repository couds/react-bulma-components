import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CONSTANTS from '../../constants';
import Column from './column';
import COLUMN_CONSTANTS from './constants';

const breakpoints = [null].concat(Object.keys(CONSTANTS.BREAKPOINTS).map(key => CONSTANTS.BREAKPOINTS[key]));

const Columns = ({
  children,
  className,
  style,
  breakpoint,
  gapless,
  multiline,
  centered,
}) => (
  <div
    className={classNames(className, 'columns', {
      [`is-${breakpoint}`]: breakpoint,
      'is-gapless': gapless,
      'is-multiline': multiline,
      'is-centered': centered,
    })}
    style={style}
  >
    {children}
  </div>
);

Columns.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  breakpoint: PropTypes.oneOf(breakpoints),
  gapless: PropTypes.bool,
  multiline: PropTypes.bool,
  centered: PropTypes.bool,
};

Columns.defaultProps = {
  children: null,
  className: '',
  style: {},
  breakpoint: null,
  gapless: false,
  centered: false,
  multiline: true,
};

Columns.Column = Column;
Columns.CONSTANTS = COLUMN_CONSTANTS;

export default Columns;
