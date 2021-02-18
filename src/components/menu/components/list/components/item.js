import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
/* eslint-disable-next-line import/no-cycle */
import List from '../list';
import modifiers from '../../../../../modifiers';
import Element from '../../../../element';
import renderAsShape from '../../../../../modifiers/render-as';

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
  ...modifiers.propTypes,
  /**
   * Additional CSS classes to be passed to `Menu.List.Item`.
   * They will sit alongside pre-applied Bulma classes.
   */
  className: PropTypes.string,
  /**
   * Child element of this item. Can be a nested `Menu.List` which
   * will display a nested list, or just regular react node (string or other
   * react components), which will be rendered as a normal list item.
   *
   * Note that you can nest at most one `Menu.List` per item.
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * Whether this item is selected. If true, it will be highlighted.
   */
  active: PropTypes.bool,
  renderAs: renderAsShape,
};

MenuListItem.defaultProps = {
  ...modifiers.defaultProps,
  className: undefined,
  children: null,
  active: false,
  renderAs: 'a',
};

export default MenuListItem;
