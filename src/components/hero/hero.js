import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CONSTANTS from '../../constants';

import HeroHead from './components/hero-head';
import HeroBody from './components/hero-body';
import HeroFooter from './components/hero-footer';
import modifiers from '../../modifiers';
import Element from '../element';
import renderAsShape from '../../modifiers/render-as';

const colors = [null].concat(
  Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]),
);

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
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: renderAsShape,
  color: PropTypes.oneOf(colors),
  gradient: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'fullheight']),
  hasNavbar: PropTypes.bool,
};

Hero.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'section',
  color: undefined,
  gradient: undefined,
  size: undefined,
  hasNavbar: undefined,
};

export default Hero;
