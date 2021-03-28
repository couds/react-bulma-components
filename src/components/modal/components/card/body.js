import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../../element';
import renderAsShape from '../../../../modifiers/render-as';

const ModalCardBody = ({ children, className, ...props }) => (
  <Element {...props} className={classnames('modal-card-body', className)}>
    {children}
  </Element>
);

ModalCardBody.propTypes = {
  ...Element.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: renderAsShape,
};

ModalCardBody.defaultProps = {
  ...Element.defaultProps,
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'section',
};

export default ModalCardBody;
