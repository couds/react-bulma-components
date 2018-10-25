import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../../modifiers';
import Element from '../../../element';

const ModalCardTitle = React.forwardRef(({
  children,
  className,
  ...props
}, ref) => (
  <Element
    {...props}
    ref={ref}
    className={classnames('modal-card-title', className)}
  >
    {children}
  </Element>
));

ModalCardTitle.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
};

ModalCardTitle.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: undefined,
  renderAs: 'p',
};

export default ModalCardTitle;
