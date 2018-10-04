import React from 'react';
import classnames from 'classnames';
import Image from '../../image';
import modifiers from '../../../modifiers';
import Element from '../../element';

const CardImage = ({
  className,
  ...props
}) => (
  <Element
    className={classnames('card-image', className)}
  >
    <Image {...props} />
  </Element>
);

CardImage.propTypes = {
  ...modifiers.propTypes,
  ...Image.propTypes,
};

CardImage.defaultProps = {
  ...modifiers.defaultProps,
  ...Image.defaultProps,
};

export default CardImage;
