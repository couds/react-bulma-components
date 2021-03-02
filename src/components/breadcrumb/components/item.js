import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../element';

const BreadcrumbItem = ({ className, active, children, ...props }) => (
  <Element
    renderAs="li"
    {...props}
    className={classNames(className, {
      'is-active': active,
    })}
  >
    {children}
  </Element>
);

BreadcrumbItem.propTypes = {
  /**
   * Additional CSS classes to pass to `<Breadcrumb.Item />`.
   * They will sit alongside pre-applied bulma classes.
   */
  className: PropTypes.string,
  /**
   * Whether this item is the current active component in the breadcrumb
   */
  active: PropTypes.bool,
  children: PropTypes.node,
};

BreadcrumbItem.defaultProps = {
  className: undefined,
  active: false,
  children: undefined,
};

export default BreadcrumbItem;
