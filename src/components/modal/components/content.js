import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';
import renderAsShape from '../../../modifiers/render-as';

const ModalContent = ({ children, className, ...props }) => (
  <Element {...props} className={classnames('modal-content', className)}>
    {children}
  </Element>
);

ModalContent.propTypes = {
  ...Element.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: renderAsShape,
};

ModalContent.defaultProps = {
  ...Element.defaultProps,
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'div',
};

export default ModalContent;
