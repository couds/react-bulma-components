import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import CONSTANTS from '../../constants';

const colors = [null].concat(Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]));


export default class Icon extends PureComponent {
  static propTypes = {
    icon: PropTypes.string,
    children: PropTypes.element,
    className: PropTypes.string,
    style: PropTypes.shape({}),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    align: PropTypes.oneOf(['left', 'right']),
    color: PropTypes.oneOf(colors),
  }

  static defaultProps = {
    className: '',
    style: {},
    size: null,
    color: null,
    children: null,
    align: null,
    icon: null,
  }

  render() {
    const {
      icon,
      size,
      color,
      className,
      align,
      children,
      ...props
    } = this.props;

    return (
      <span
        {...props}
        className={classnames('icon', className, {
          [`is-${size}`]: size,
          [`is-${align}`]: align,
          [`has-text-${color}`]: color,
    })}
      >
        { children || (
          <i
            className={classnames('rbc', {
              [`rbc-${icon}`]: icon,
            })}
          />
        )}
      </span>
    );
  }
}
