import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Burger from './burger';

export default class Brand extends React.PureComponent {
  static propTypes = {
    style: PropTypes.shape({}),
    className: PropTypes.string,
    children: PropTypes.node,
    active: PropTypes.bool,
    toggleMenu: PropTypes.func,
  }

  static defaultProps = {
    style: {},
    className: '',
    children: null,
    active: false,
    toggleMenu: () => {},
  }

  render() {
    const {
      style, className, children, active, toggleMenu,
    } = this.props;
    return (
      <div
        style={style}
        className={classnames('navbar-brand', className)}
      >
        {React.Children.map(children, (child) => {
          if ([Burger].includes(child.type)) {
            return React.cloneElement(child, { active, toggleMenu });
          }
          return child;
        })}
      </div>
    );
  }
}
