import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CONSTANTS from '../../constants';

import HeroHead from './components/hero-head';
import HeroBody from './components/hero-body';
import HeroFooter from './components/hero-footer';

const colors = [null].concat(Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]));

const Hero = ({
  children,
  className,
  renderAs,
  color,
  gradient,
  size,
  ...props
}) => {
  const Element = renderAs;
  return (
    <Element
      {...props}
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


Hero.Head = HeroHead;

Hero.Body = HeroBody;

Hero.Footer = HeroFooter;

Hero.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
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

export default Hero;
