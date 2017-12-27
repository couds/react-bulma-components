import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import List from '../list';

export default class MenuListItem extends PureComponent {
  static displayName = 'Menu.List.Item'

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    active: PropTypes.bool,
    renderAs: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
    ]),
  }

  static defaultProps = {
    className: '',
    children: null,
    active: false,
    renderAs: 'a',
  }
  render() {
    const {
      children,
      active,
      className,
      renderAs,
      ...props
    } = this.props;
    const Element = renderAs;
    if (typeof children === 'string') {
      return (
        <li>
          <Element className={classnames(className, { 'is-active': active })} {...props}>{children}</Element>
        </li>
      );
    }

    if (React.Children.only(children).type === List) {
      const child = React.Children.only(children);
      return (
        <li>
          <Element className={classnames(className, { 'is-active': active })} {...props}>{child.props.title}</Element>
          {React.cloneElement(child, { title: null })}
        </li>
      );
    }

    return <li>{children}</li>;
  }
}
