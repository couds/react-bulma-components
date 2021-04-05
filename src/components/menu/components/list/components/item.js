import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
/* eslint-disable-next-line import/no-cycle */
import List from '../list';

import Element from '../../../../element';

const MenuListItem = ({
  children,
  active,
  className,
  domRef: ref,
  ...props
}) => {
  if (
    typeof children !== 'string' &&
    React.Children.toArray(children).length === 1 &&
    React.Children.only(children).type === List
  ) {
    const child = React.Children.only(children);
    return (
      <li ref={ref}>
        <Element
          className={classnames(className, { 'is-active': active })}
          {...props}
        >
          {child.props.title}
        </Element>
        {React.cloneElement(child, { title: undefined })}
      </li>
    );
  }

  return (
    <li ref={ref}>
      <Element
        className={classnames(className, { 'is-active': active })}
        {...props}
      >
        {children}
      </Element>
    </li>
  );
};

MenuListItem.propTypes = {
  active: PropTypes.bool,
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

MenuListItem.defaultProps = {
  renderAs: 'a',
};

export default MenuListItem;
