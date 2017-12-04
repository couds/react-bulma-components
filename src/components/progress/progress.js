import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CONSTANTS from '../../constants';

const colors = [null].concat(Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]));

export default class Progress extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    color: PropTypes.oneOf(colors),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    value: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  }

  static defaultProps = {
    className: '',
    style: {},
    color: null,
    size: null,
  }

  render() {
    const {
      className,
      style,
      value,
      max,
      color,
      size,
    } = this.props;

    return (
      <progress
        style={style}
        value={value}
        max={max}
        className={classnames('progress', className, {
          [`is-${color}`]: color,
          [`is-${size}`]: size,
        })}
      />
    );
  }
}
