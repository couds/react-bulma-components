import cn from 'classnames';
import React from 'react';
import modifiers from '../../../modifiers';
import Element from '../../element';
import Image from '../../image';

const CardImage = React.forwardRef(({ className, ...props }, ref) => (
  <Element className={cn('card-image', className)}>
    <Image ref={ref} {...props} />
  </Element>
));

CardImage.propTypes = {
  ...modifiers.propTypes,
  ...Image.propTypes
};

CardImage.defaultProps = {
  ...modifiers.defaultProps,
  ...Image.defaultProps
};

export default CardImage;
