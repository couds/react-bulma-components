import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../../modifiers';
import Element from '../../../element';

const ModalCardTitle = ({ children, className, ...props }) => (
  <Element {...props} className={classnames('modal-card-title', className)}>
    {children}
  </Element>
);

ModalCardTitle.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
};

ModalCardTitle.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'p',
};

export default ModalCardTitle;
