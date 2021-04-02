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
  active: PropTypes.bool,
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

BreadcrumbItem.defaultProps = {
  active: false,
  renderAs: 'li',
};

export default BreadcrumbItem;
