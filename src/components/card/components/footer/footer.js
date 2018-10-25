import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CardFooterItem from './components/footer-item';
import modifiers from '../../../../modifiers';
import Element from '../../../element';

const CardFooter = React.forwardRef(({
  className,
  ...props
}, ref) => (
  <Element {...props} ref={ref} className={classnames('card-footer', className)} />
));

CardFooter.Item = CardFooterItem;

CardFooter.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

CardFooter.defaultProps = {
  ...modifiers.defaultProps,
  className: '',
  renderAs: 'div',
};

export default CardFooter;
