import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../../element';
import renderAsShape from '../../../../modifiers/render-as';

const FieldLabel = ({ children, className, size, ...props }) => (
  <Element
    {...props}
    className={classnames('field-label', className, {
      [`is-${size}`]: size,
    })}
  >
    {children}
  </Element>
);

FieldLabel.propTypes = {
  ...Element.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: renderAsShape,
  size: PropTypes.oneOf(['small', 'normal', 'medium', 'large']),
};

FieldLabel.defaultProps = {
  ...Element.defaultProps,
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'div',
  size: undefined,
};

export default FieldLabel;
