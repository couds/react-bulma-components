import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import CardImage from './components/image';
import CardContent from './components/content';
import CardHeader from './components/header';
import CardFooter from './components/footer';
import modifiers from '../../modifiers';

import Element from '../element';
import renderAsShape from '../../modifiers/render-as';

const Card = ({ className, children, ...props }) => (
  <Element className={classnames('card', className)} {...props}>
    {children}
  </Element>
);

Card.Image = CardImage;

Card.Content = CardContent;

Card.Header = CardHeader;

Card.Footer = CardFooter;

Card.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.shape({}),
  renderAs: renderAsShape,
};

Card.defaultProps = {
  ...modifiers.defaultProps,
  className: undefined,
  children: null,
  style: undefined,
  renderAs: 'div',
};

export default Card;
