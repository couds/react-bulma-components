import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Item = ({
  className,
  active,
  renderAs,
  children,
  dropdown,
  dropdownUp,
  hoverable,
  ...props
}) => {
  let Element = renderAs;
  if (dropdown && Element === 'a') {
    Element = 'span';
  }
  return (
    <Element
      {...props}
      className={classnames('navbar-item', className, {
      'is-active': active,
      'has-dropdown': dropdown,
      'is-hoverable': hoverable,
      'has-dropdown-up': dropdownUp,
    })}
    >
      {children}
    </Element>
  );
};

Item.propTypes = {
  style: PropTypes.shape({}),
  className: PropTypes.string,
  active: PropTypes.bool,
  dropdown: PropTypes.bool,
  dropdownUp: PropTypes.bool,
  hoverable: PropTypes.bool,
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

Item.defaultProps = {
  style: {},
  className: '',
  active: false,
  children: null,
  dropdown: false,
  hoverable: false,
  dropdownUp: false,
  renderAs: 'a',
};

export default Item;
