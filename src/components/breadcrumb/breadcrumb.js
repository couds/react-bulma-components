import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../element';
import BreadcrumbItem from './components/item';
import modifiers from '../../modifiers';
import renderAsShape from '../../modifiers/render-as';

const Breadcrumb = ({
  className,
  items,
  renderAs,
  hrefAttr,
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
  ...modifiers.propTypes,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  separator: PropTypes.oneOf(['arrow', 'bullet', 'dot', 'succeeds']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  align: PropTypes.oneOf(['right', 'center']),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      active: PropTypes.bool,
      name: PropTypes.node,
    }),
  ),
  renderAs: renderAsShape,
  hrefAttr: PropTypes.string,
  children: PropTypes.node,
};

Breadcrumb.defaultProps = {
  ...modifiers.defaultProps,
  items: [],
  hrefAttr: 'href',
  separator: undefined,
  renderAs: 'a',
  className: undefined,
  style: undefined,
  size: undefined,
  align: undefined,
  children: undefined,
};

export default Breadcrumb;
