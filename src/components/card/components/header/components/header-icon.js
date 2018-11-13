import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../../../modifiers';
import Element from '../../../../element';

const CardHeaderIcon = React.forwardRef(({
  className,
  ...props
}, ref) => (
  <Element {...props} ref={ref} className={classnames('card-header-icon', className)} />
));


CardHeaderIcon.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

CardHeaderIcon.defaultProps = {
  ...modifiers.defaultProps,
  className: undefined,
  renderAs: 'div',
};

export default CardHeaderIcon;
