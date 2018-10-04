import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../../../modifiers';
import Element from '../../../../element';

const CardFooterItem = ({
  className,
  ...props
}) => (
  <Element {...props} className={classnames('card-footer-item', className)} />
);

CardFooterItem.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

CardFooterItem.defaultProps = {
  ...modifiers.defaultProps,
  className: '',
  renderAs: 'div',
};

export default CardFooterItem;
