import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Tab extends PureComponent {
  static displayName = 'Tabs.Tab'
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.shape({}),
    renderAs: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
    ]),
    active: PropTypes.bool,
  }

  static defaultProps = {
    children: null,
    className: '',
    style: {},
    renderAs: 'a',
    active: false,
  }
  render() {
    const {
      children,
      className,
      style,
      renderAs,
      active,
      ...props
    } = this.props;
    const Element = renderAs;
    return (
      <li
        style={style}
        className={classnames(className, {
          'is-active': active,
        })}
      >
        <Element {...props}>
          {children}
        </Element>
      </li>
    );
  }
}
