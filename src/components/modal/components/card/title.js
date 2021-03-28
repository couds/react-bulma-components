import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../../element';

const ModalCardTitle = ({ children, className, ...props }) => (
  <Element {...props} className={classnames('modal-card-title', className)}>
    {children}
  </Element>
);

ModalCardTitle.propTypes = {
  ...Element.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
};

ModalCardTitle.defaultProps = {
  ...Element.defaultProps,
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'p',
};

export default ModalCardTitle;
