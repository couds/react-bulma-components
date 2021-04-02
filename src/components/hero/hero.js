import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CONSTANTS from '../../constants';

import HeroHead from './components/hero-head';
import HeroBody from './components/hero-body';
import HeroFooter from './components/hero-footer';

import Element from '../element';

const colors = [null].concat(Object.values(CONSTANTS.COLORS));

const Hero = ({
  children,
  className,
  color,
  gradient,
  size,
  hasNavbar,
  ...props
}) => (
  <Element
    {...props}
    className={classnames('hero', className, {
      [`is-${color}`]: color,
      [`is-${size}`]: size,
      'is-bold': gradient,
      'is-fullheight-with-navbar': hasNavbar,
    })}
  >
    {children}
  </Element>
);

Hero.Head = HeroHead;

Hero.Body = HeroBody;

Hero.Footer = HeroFooter;

Hero.propTypes = {
  ...Element.propTypes,
  color: PropTypes.oneOf(colors),
  gradient: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'fullheight']),
  hasNavbar: PropTypes.bool,
};

Hero.defaultProps = {
  ...Element.defaultProps,
  renderAs: 'section',
};

export default Hero;
