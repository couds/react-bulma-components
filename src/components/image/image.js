import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CONSTANTS from './constants';

import Element from '../element';

const Image = ({
  className,
  alt,
  size,
  fallback,
  rounded,
  src,
  fullwidth,
  ...props
}) => {
  const [state, setState] = useState({ src });
  useEffect(() => {
    setState({ src });
  }, [src]);
  let s = size;

  if (typeof size === 'number') {
    s = `${s}x${s}`;
  }
  return (
    <Element
      {...props}
      className={classnames('image', className, {
        [`is-${s}`]: s,
        'is-fullwidth': fullwidth,
      })}
    >
      <img
        className={classnames({
          'is-rounded': rounded,
        })}
        onError={() => setState({ src: fallback })}
        src={state.src}
        alt={alt}
      />
    </Element>
  );
};

Image.propTypes = {
  ...Element.propTypes,
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  rounded: PropTypes.bool,
  style: PropTypes.shape({}),
  size: PropTypes.oneOf(CONSTANTS.SIZES),
  fallback: PropTypes.string,
  fullwidth: PropTypes.bool,
};

Image.defaultProps = {
  ...Element.defaultProps,
  className: undefined,
  src: '',
  alt: '',
  rounded: false,
  style: undefined,
  size: undefined,
  fallback: 'https://bulma.io/images/placeholders/480x480.png',
  fullwidth: false,
  renderAs: 'figure',
};

export default Image;
