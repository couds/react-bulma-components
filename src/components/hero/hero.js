import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CONSTANTS from '../../constants';

import HeroHeader from './components/hero-header';
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
      [`is-${size}`]: size && !hasNavbar,
      'is-bold': gradient,
      'is-fullheight-with-navbar': hasNavbar,
    })}
  >
    {children}
  </Element>
);

Hero.Header = HeroHeader;

Hero.Body = HeroBody;

Hero.Footer = HeroFooter;

Hero.propTypes = {
  color: PropTypes.oneOf(colors),
  gradient: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'fullheight']),
  hasNavbar: PropTypes.bool,
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

Hero.defaultProps = {
  renderAs: 'section',
};

export default Hero;
