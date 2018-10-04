import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../../modifiers';
import Element from '../../../element';

const ModalCardBody = ({
  children,
  className,
  ...props
}) => (
  <Element
    {...props}
    className={classnames('modal-card-body', className)}
  >
    {children}
  </Element>
);

ModalCardBody.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.string,
};

ModalCardBody.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
  renderAs: 'section',
};

export default ModalCardBody;
