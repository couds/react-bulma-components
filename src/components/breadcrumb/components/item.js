import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Element from '../../element';

const BreadcrumbItem = ({ className, active, children, ...props }) => (
  <Element
    {...props}
    className={classNames(className, {
      'is-active': active,
    })}
  >
    {children}
  </Element>
);

BreadcrumbItem.propTypes = {
  ...Element.propTypes,
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
  ...Element.defaultProps,
  className: undefined,
  active: false,
  children: undefined,
  renderAs: 'li',
};

export default BreadcrumbItem;
