import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import CardImage from './components/image';
import CardContent from './components/content';
import CardHeader from './components/header';
import CardFooter from './components/footer';
import modifiers from '../../modifiers';

const Card = ({
  className,
  children,
  renderAs,
  ...allProps
}) => {
  const Element = renderAs;
  const props = modifiers.clean(allProps);
  return (
    <Element
      className={classnames('card', modifiers.classnames(allProps), className)}
      {...props}
    >
      {children}
    </Element>
  );
};

Card.Image = CardImage;

Card.Content = CardContent;

Card.Header = CardHeader;

Card.Footer = CardFooter;

Card.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

Card.defaultProps = {
  ...modifiers.defaultProps,
  className: '',
  children: null,
  style: {},
  renderAs: 'div',
};

export default Card;
