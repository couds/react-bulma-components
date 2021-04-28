import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

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
        onError={() => {
          return state.src !== fallback && setState({ src: fallback });
        }}
        src={state.src}
        alt={alt}
      />
    </Element>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  rounded: PropTypes.bool,
  size: PropTypes.oneOfType([
    PropTypes.oneOf([
      16,
      24,
      32,
      48,
      64,
      96,
      128,
      'square',
      '1by1',
      '4by3',
      '3by2',
      '16by9',
      '2by1',
      '5by4',
      '5by3',
      '3by1',
      '4by5',
      '3by4',
      '2by3',
      '3by5',
      '9by16',
      '1by2',
      '1by3',
    ]),
    PropTypes.number,
    PropTypes.string,
  ]),
  fallback: PropTypes.string,
  fullwidth: PropTypes.bool,
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

Image.defaultProps = {
  renderAs: 'figure',
};

export default Image;
