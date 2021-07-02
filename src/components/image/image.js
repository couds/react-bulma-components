import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../element';

const Image = ({
  // figure tag props
  className,
  fullwidth,
  // img tag props
  alt,
  crossOrigin,
  height,
  ismap,
  loading,
  longdesc,
  referrerpolicy,
  sizes,
  src,
  srcSet,
  useMap,
  width,
  // component props
  size,
  fallback,
  rounded,
  imageClassName,
  // leftovers
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
        className={classnames(imageClassName, {
          'is-rounded': rounded,
        })}
        onError={() => {
          return state.src !== fallback && setState({ src: fallback });
        }}
        src={state.src}
        alt={alt}
        crossOrigin={crossOrigin}
        height={height}
        ismap={ismap}
        loading={loading}
        longdesc={longdesc}
        referrerpolicy={referrerpolicy}
        sizes={sizes}
        srcSet={srcSet}
        useMap={useMap}
        width={width}
      />
    </Element>
  );
};

Image.propTypes = {
  fullwidth: PropTypes.bool,
  alt: PropTypes.string,
  crossOrigin: PropTypes.oneOf(['anonymous', 'use-credentials']),
  height: PropTypes.string,
  ismap: PropTypes.bool,
  loading: PropTypes.oneOf(['eager', 'lazy']),
  longdesc: PropTypes.string,
  referrerpolicy: PropTypes.oneOf([
    'no-referrer',
    'no-referrer-when-downgrade',
    'origin',
    'origin-when-cross-origin',
    'unsafe-url',
  ]),
  sizes: PropTypes.string,
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string,
  useMap: PropTypes.string,
  width: PropTypes.string,
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
  /**
   * Applies additional classes to the `img` tag (standard `className` applies to root element)
   */
  imageClassName: PropTypes.string,
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
