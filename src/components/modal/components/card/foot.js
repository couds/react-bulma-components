import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../../modifiers';
import Element from '../../../element';

const ModalCardFoot = React.forwardRef(({
  children,
  className,
  ...props
}, ref) => (
  <Element
    {...props}
    ref={ref}
    className={classnames('modal-card-foot', className)}
  >
    {children}
  </Element>
));

ModalCardFoot.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
};

ModalCardFoot.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
  renderAs: 'footer',
};

export default ModalCardFoot;
