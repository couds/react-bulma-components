import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
/* eslint-disable-next-line import/no-cycle */
import List from '../list';

const MenuListItem = ({
  children,
  active,
  className,
  renderAs,
  ...props
}) => {
  const Element = renderAs;
  if (typeof children === 'string') {
    return (
      <li>
        <Element className={classnames(className, { 'is-active': active })} {...props}>
          {children}
        </Element>
      </li>
    );
  }

  if (React.Children.only(children).type === List) {
    const child = React.Children.only(children);
    return (
      <li>
        <Element className={classnames(className, { 'is-active': active })} {...props}>
          {child.props.title}
        </Element>
        {React.cloneElement(child, { title: null })}
      </li>
    );
  }

  return (
    <li>
      {children}
    </li>
  );
};

MenuListItem.propTypes = {
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
};

MenuListItem.defaultProps = {
  className: '',
  children: null,
  active: false,
  renderAs: 'a',
};

export default MenuListItem;
