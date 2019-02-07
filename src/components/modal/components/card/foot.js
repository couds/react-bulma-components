import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../../modifiers';
import { Element } from '../../../element';

export const ModalCardFoot = React.forwardRef(({ children, className, ...props }, ref) => (
  <Element {...props} ref={ref} className={cn('modal-card-foot', className)}>
    {children}
  </Element>
));

ModalCardFoot.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({})
};

ModalCardFoot.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
  renderAs: 'footer'
};
