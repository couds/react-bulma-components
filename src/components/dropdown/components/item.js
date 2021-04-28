import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const DropdownItem = ({ active, children, value, className, ...props }) => {
  return (
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
};

DropdownItem.propTypes = {
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
};

DropdownItem.defaultProps = {};

export default DropdownItem;
