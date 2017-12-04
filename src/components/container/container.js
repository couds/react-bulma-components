import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CONSTANTS from '../../constants';

const breakpoints = [null].concat(Object.keys(CONSTANTS.BREAKPOINTS).map(key => CONSTANTS.BREAKPOINTS[key]));

export default class Container extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    fluid: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    breakpoint: PropTypes.oneOf(breakpoints),
    renderAs: PropTypes.string,
  }

  static defaultProps = {
    fluid: false,
    children: null,
    breakpoint: null,
    className: '',
    style: {},
    renderAs: 'div',
  }

  render() {
    const {
      children,
      fluid,
      breakpoint,
      className,
      style,
      renderAs,
    } = this.props;
    const Element = renderAs;
    return (
      <Element
        style={style}
        className={classnames('container', className, {
          'is-fluid': fluid,
          [`is-${breakpoint}`]: breakpoint,
        })}
      >
        {children}
      </Element>
    );
  }
}
