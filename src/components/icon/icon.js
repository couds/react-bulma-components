import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import CONSTANTS from '../../constants';

const colors = [null].concat(Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]));


export default class Icon extends PureComponent {
  static propTypes = {
    children: PropTypes.element,
    style: PropTypes.object,
    className: PropTypes.string,
    /**
     * Name of the icon embed with bulma-react-components
     */
    icon: PropTypes.string.isRequired,
    /**
     * Size of the icon
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * Alignment of the icon
     */
    align: PropTypes.oneOf(['left', 'right']),
    /**
     * The color of icon using the classes from Bulma
     */
    color: PropTypes.oneOf(colors),
  }

  static defaultProps = {
    className: '',
    style: {},
    size: null,
    color: null,
    children: null,
    align: null,
  }

  render() {
    const {
      icon,
      size,
      color,
      className,
      style,
      align,
      children,
    } = this.props;

    return (
      <span
        style={style}
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
