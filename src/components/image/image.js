import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import modifiers from '../../modifiers';
import { Element } from '../element';
import CONSTANTS from './constants';

export const Image = React.forwardRef(({ className, alt, size, fallback, rounded, src, ...props }, ref) => {
  const [image, setImage] = useState({ src, default: src });

  useEffect(() => {
    setImage({ src: image.default !== src ? src : image.src, default: src });
  });

  const handleError = () => {
    setImage({ ...image, src: fallback });
  };

  if (typeof size === 'number') {
    size = `${size}x${size}`;
  }

  return (
    <Element
      {...props}
      renderAs="figure"
      className={cn('image', className, {
        [`is-${size}`]: size
      })}
    >
      <img
        ref={ref}
        className={cn({
          'is-rounded': rounded
        })}
        onError={handleError}
        src={image.src}
        alt={alt}
        data-testid="image-img"
      />
    </Element>
  );
});

Image.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  rounded: PropTypes.bool,
  style: PropTypes.shape({}),
  size: PropTypes.oneOf(CONSTANTS.SIZES),
  fallback: PropTypes.string
};

Image.defaultProps = {
  ...modifiers.defaultProps,
  className: '',
  src: '',
  alt: '',
  rounded: false,
  style: {},
  size: null,
  fallback: 'http//bulma.io/images/placeholders/480x480.png'
};
