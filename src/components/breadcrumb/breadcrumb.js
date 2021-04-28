import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Element from '../element';
import BreadcrumbItem from './components/item';

const Breadcrumb = ({
  className,
  separator,
  size,
  align,
  children,
  ...props
}) => {
  return (
    <Element
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
};

Breadcrumb.Item = BreadcrumbItem;

Breadcrumb.propTypes = {
  separator: PropTypes.oneOf(['arrow', 'bullet', 'dot', 'succeeds']),
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['small', 'medium', 'large']),
    PropTypes.string,
  ]),
  align: PropTypes.oneOf(['right', 'center']),
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

Breadcrumb.defaultProps = {
  separator: undefined,
  renderAs: 'nav',
  size: undefined,
  align: undefined,
};

export default Breadcrumb;
