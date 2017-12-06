import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CONSTANTS from '../../constants';
import Column from './components/column';
import COLUMN_CONSTANTS from './constants';

const breakpoints = [null].concat(Object.keys(CONSTANTS.BREAKPOINTS).map(key => CONSTANTS.BREAKPOINTS[key]));

export default class Columns extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
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
  }

  static defaultProps = {
    children: null,
    className: '',
    style: {},
    breakpoint: null,
    gapless: false,
    centered: false,
    multiline: true,
  }

  static Column = Column
  static CONSTANTS = COLUMN_CONSTANTS

  render() {
    const {
      children,
      className,
      style,
      breakpoint,
      gapless,
      multiline,
      centered,
    } = this.props;
    return (
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
  }
}
