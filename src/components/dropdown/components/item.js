import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';
import Element from '../../element';
import renderAsShape from '../../../modifiers/render-as';

const DropdownItem = ({ active, children, value, className, ...props }) => (
  <Element
    title={value}
    {...props}
    role="presentation"
    className={classnames(className, 'dropdown-item', {
      'is-active': active,
    })}
  >
    {children}
  </Element>
);

DropdownItem.propTypes = {
  ...modifiers.propTypes,
  /**
   * Whether this dropdown item is currently selected.
   * Shows a highlighted effect if true.
   * Note that the effect only works when this item is rendered as an anchor
   * (`<a>`).
   */
  active: PropTypes.bool,
  /**
   * The value this dropdown item holds. When this item is clicked,
   * this value is passed to the onChange callback of `<Dropdown />`.
   * The value is used to determine if this item is active or not.
   */
  value: PropTypes.any.isRequired,
  children: PropTypes.node,
  /**
   * Called whenever this item is clicked.
   */
  onClick: PropTypes.func,
  /**
   * Defines what this dropdown item should be rendered as.
   * Can be a React component or an HTML element.
   * Usually this is `'a'`, but if you want to put custom content inside
   * this item, you need to set this to `'div'`.
   */
  renderAs: renderAsShape,
};

DropdownItem.defaultProps = {
  ...modifiers.defaultProps,
  active: false,
  onClick: undefined,
  children: null,
};

export default DropdownItem;
