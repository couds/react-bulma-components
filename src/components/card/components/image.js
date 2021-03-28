import React from 'react';
import classnames from 'classnames';
import Image from '../../image';

import Element from '../../element';

const CardImage = ({ className, domRef, ...props }) => (
  <Element domRef={domRef} className={classnames('card-image', className)}>
    <Image {...props} />
  </Element>
);

CardImage.propTypes = {
  ...Image.propTypes,
};

CardImage.defaultProps = {
  ...Image.defaultProps,
};

export default CardImage;
