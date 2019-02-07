import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../modifiers';
import { Element } from '../element';
import { CardContent } from './components/content';
import { CardFooter } from './components/footer';
import { CardHeader } from './components/header';
import { CardImage } from './components/image';

export const Card = React.forwardRef(({ className, children, ...props }, ref) => (
  <Element ref={ref} className={cn('card', className)} {...props}>
    {children}
  </Element>
));

Card.Image = CardImage;

Card.Content = CardContent;

Card.Header = CardHeader;

Card.Footer = CardFooter;

Card.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

Card.defaultProps = {
  ...modifiers.defaultProps,
  className: '',
  children: null,
  style: {},
  renderAs: 'div'
};
