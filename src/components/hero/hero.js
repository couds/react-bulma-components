import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CONSTANTS from '../../constants';

import HeroHead from './hero-head';
import HeroBody from './hero-body';
import HeroFooter from './hero-footer';

const colors = [null].concat(Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]));

const Hero = ({
  children,
  className,
  style,
  renderAs,
  color,
  gradient,
  size,
}) => {
  const Element = renderAs;
  return (
    <Element
      style={style}
      className={classnames('hero', className, {
        [`is-${color}`]: color,
        [`is-${size}`]: size,
        'is-bold': gradient,
      })}
    >
      {children}
    </Element>
  );
};

Hero.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  renderAs: PropTypes.string,
  color: PropTypes.oneOf(colors),
  gradient: PropTypes.bool,
  size: PropTypes.oneOf(['medium', 'large', 'fullheight']),
};

Hero.defaultProps = {
  children: null,
  className: '',
  style: {},
  renderAs: 'section',
  color: null,
  gradient: false,
  size: null,
};

Hero.Head = HeroHead;
Hero.Body = HeroBody;
Hero.Footer = HeroFooter;

export default Hero;
