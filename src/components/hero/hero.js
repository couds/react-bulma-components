import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CONSTANTS from '../../constants';

import HeroHead from './hero-head';
import HeroBody from './hero-body';
import HeroFooter from './hero-footer';

const roles = [null].concat(Object.keys(CONSTANTS.ROLES).map(key => CONSTANTS.ROLES[key]));

const Hero = ({
  children,
  className,
  style,
  renderAs,
  heroRole,
  gradient,
  size,
}) => {
  const Element = renderAs;
  return (
    <Element
      style={style}
      className={classnames('hero', className, {
        [`is-${heroRole}`]: heroRole,
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
  heroRole: PropTypes.oneOf(roles),
  gradient: PropTypes.bool,
  size: PropTypes.oneOf(['medium', 'large', 'fullheight']),
};

Hero.defaultProps = {
  children: null,
  className: '',
  style: {},
  renderAs: 'section',
  heroRole: null,
  gradient: false,
  size: null,
};

Hero.Head = HeroHead;
Hero.Body = HeroBody;
Hero.Footer = HeroFooter;

export default Hero;
