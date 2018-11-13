import React from 'react';
import classnames from 'classnames';
import Image from '../../image';
import modifiers from '../../../modifiers';
import Element from '../../element';

const CardImage = React.forwardRef(({
  className,
  ...props
}, ref) => (
  <Element
    className={classnames('card-image', className)}
  >
    <Image
      ref={ref}
      {...props}
    />
  </Element>
));

CardImage.propTypes = {
  ...modifiers.propTypes,
  ...Image.propTypes,
};

CardImage.defaultProps = {
  ...modifiers.defaultProps,
  ...Image.defaultProps,
};

export default CardImage;
