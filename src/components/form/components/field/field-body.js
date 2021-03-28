import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../../element';
import renderAsShape from '../../../../modifiers/render-as';

const FieldBody = ({ children, className, ...props }) => (
  <Element {...props} className={classnames('field-body', className, {})}>
    {children}
  </Element>
);

FieldBody.propTypes = {
  ...Element.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: renderAsShape,
};

FieldBody.defaultProps = {
  ...Element.defaultProps,
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'div',
};

export default FieldBody;
