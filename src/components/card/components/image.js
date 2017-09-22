import React from 'react';
import classnames from 'classnames';
import Image from '../../image';

const CardImage = ({
  className,
  style,
  ...props
}) => (
  <div
    style={style}
    className={classnames('card-image', className)}
  >
    <Image {...props} />
  </div>
);

CardImage.propTypes = Image.propTypes;

CardImage.defaultProps = Image.defaultProps;

export default CardImage;
