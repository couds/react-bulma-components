import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Element from '../element';
import BreadcrumbItem from './components/item';

const Breadcrumb = ({
  className,
  renderAs,
  separator,
  size,
  align,
  children,
  ...props
}) => (
  <Element
    renderAs="nav"
    {...props}
    className={classnames('breadcrumb', className, {
      [`has-${separator}-separator`]: separator,
      [`is-${size}`]: size,
      [`is-${align}`]: align,
    })}
  >
    <ul>{children}</ul>
  </Element>
);

Breadcrumb.Item = BreadcrumbItem;

Breadcrumb.propTypes = {
  ...Element.propTypes,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  separator: PropTypes.oneOf(['arrow', 'bullet', 'dot', 'succeeds']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  align: PropTypes.oneOf(['right', 'center']),
  children: PropTypes.node,
};

Breadcrumb.defaultProps = {
  ...Element.defaultProps,
  separator: undefined,
  renderAs: 'nav',
  className: undefined,
  style: undefined,
  size: undefined,
  align: undefined,
  children: undefined,
};

export default Breadcrumb;
