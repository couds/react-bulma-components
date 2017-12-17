import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


import CONSTANTS from '../../../constants';

const colors = [null].concat(Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]));

export default class Help extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.shape({}),
    color: PropTypes.oneOf(colors),
    children: PropTypes.node,
  };

  static defaultProps = {
    children: null,
    className: '',
    style: {},
    color: null,
  }

  render() {
    const {
      className,
      style,
      children,
      color,
    } = this.props;
    return (
      <p
        style={style}
        className={classnames('help', className, {
          [`is-${color}`]: color,
        })}
      >
        {children}
      </p>
    );
  }
}
