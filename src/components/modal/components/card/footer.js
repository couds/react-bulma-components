import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../../element';

const ModalCardFoot = ({ children, className, ...props }) => (
  <Element {...props} className={classnames('modal-card-foot', className)}>
    {children}
  </Element>
);

ModalCardFoot.propTypes = {
  ...Element.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
};

ModalCardFoot.defaultProps = {
  ...Element.defaultProps,
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'footer',
};

export default ModalCardFoot;
