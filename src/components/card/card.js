import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import CardImage from './components/image';

const Card = ({
  className,
  children,
  style,
  type,
  renderAs,
  ...props
}) => {
  if (type === 'image') {
    return <CardImage {...props} style={style} className={className} />;
  }
  const Element = renderAs;
  return (
    <Element
      style={style}
      className={classnames(className, {
        [`card-${type}`]: type,
        card: !type,
      })}
      {...props}
    >
      {children}
    </Element>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,
  renderAs: PropTypes.string,
  type: PropTypes.oneOf(['header', 'header-item', 'header-icon', 'footer', 'footer-item', 'image', 'content']),
};

Card.defaultProps = {
  className: '',
  children: null,
  style: {},
  type: null,
  renderAs: 'div',
};

export default Card;
