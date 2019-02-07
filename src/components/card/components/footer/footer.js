import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../../modifiers';
import { Element } from '../../../element';
import { CardFooterItem } from './components/footer-item';

export const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <Element {...props} ref={ref} className={cn('card-footer', className)} />
));

CardFooter.Item = CardFooterItem;

CardFooter.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

CardFooter.defaultProps = {
  ...modifiers.defaultProps,
  className: '',
  renderAs: 'div'
};
