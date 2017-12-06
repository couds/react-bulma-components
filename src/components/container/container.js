import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CONSTANTS from '../../constants';

const breakpoints = [null].concat(Object.keys(CONSTANTS.BREAKPOINTS).map(key => CONSTANTS.BREAKPOINTS[key]));

export default class Container extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    /**
     * the Html or React element you want to use to render this component
     */
    renderAs: PropTypes.string,
    /**
     * If you don't want to have a maximum width but want to keep the 24px margin on the left and right sides
     */
    fluid: PropTypes.bool,
    /**
     * You can have a fullwidth container until those specific breakpoints.
     */
    breakpoint: PropTypes.oneOf(breakpoints),
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
