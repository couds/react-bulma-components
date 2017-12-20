import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import CONSTANTS from '../../constants';

const colors = [null].concat(Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]));

export default class Notification extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.shape({}),
    renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    color: PropTypes.oneOf(colors),
  }

  static defaultProps = {
    children: null,
    className: '',
    style: {},
    renderAs: 'div',
    color: null,
  }

  render() {
    const {
      children,
      className,
      renderAs,
      color,
      ...props
    } = this.props;

    const Element = renderAs;
    return (
      <Element
        {...props}
        className={classnames('notification', {
          [`is-${color}`]: color,
        }, className)}
      >
        {children}
      </Element>
    );
  }
}
