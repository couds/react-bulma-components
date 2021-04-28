import React from 'react';
import classnames from 'classnames';

import CardImage from './components/image';
import CardContent from './components/content';
import CardHeader from './components/header';
import CardFooter from './components/footer';

import Element from '../element';

const Card = ({ className, children, ...props }) => {
  return (
    <Element className={classnames('card', className)} {...props}>
      {children}
    </Element>
  );
};

Card.Image = CardImage;

Card.Content = CardContent;

Card.Header = CardHeader;

Card.Footer = CardFooter;

Card.propTypes = {};

Card.defaultProps = {};

export default Card;
