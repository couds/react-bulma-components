import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../../modifiers';
import { Element } from '../../../element';

export const ModalCardTitle = React.forwardRef(({ children, className, ...props }, ref) => (
  <Element {...props} ref={ref} className={cn('modal-card-title', className)}>
    {children}
  </Element>
));

ModalCardTitle.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({})
};

ModalCardTitle.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: undefined,
  renderAs: 'p'
};
