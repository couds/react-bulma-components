import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import CardImage from './components/image';
import CardContent from './components/content';
import CardHeader from './components/header';
import CardFooter from './components/footer';

import Element from '../element';

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
  ...Element.propTypes,
  /**
   * Additional CSS classes to pass to Card.
   */
  className: PropTypes.string,
  /**
   * Children of Card.
   */
  children: PropTypes.node,
  /**
   * React style object for Card.
   */
  style: PropTypes.shape({}),
};

Card.defaultProps = {
  ...Element.defaultProps,
  className: undefined,
  children: null,
  style: undefined,
  renderAs: 'div',
};

export default Card;
