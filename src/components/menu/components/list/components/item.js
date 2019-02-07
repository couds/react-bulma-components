import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../../../modifiers';
import { Element } from '../../../../element';
import { MenuList } from '../list';

export const MenuListItem = React.forwardRef(({ children, active, className, ...props }, ref) => {
  if (typeof children === 'string') {
    return (
      <li ref={ref}>
        <Element className={cn(className, { 'is-active': active })} {...props}>
          {children}
        </Element>
      </li>
    );
  }

  if (React.Children.only(children).type === MenuList) {
    const child = React.Children.only(children);
    return (
      <li ref={ref}>
        <Element className={cn(className, { 'is-active': active })} {...props}>
          {child.props.title}
        </Element>
        {React.cloneElement(child, { title: null })}
      </li>
    );
  }

  return <li ref={ref}>{children}</li>;
});

MenuListItem.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  active: PropTypes.bool,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

MenuListItem.defaultProps = {
  ...modifiers.defaultProps,
  className: '',
  children: null,
  active: false,
  renderAs: 'a'
};
