import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../modifiers';
import Element from '../../element';

const HeroHead = ({ children, className, ...props }) => (
  <Element {...props} className={cn(className, 'hero-head')}>
    {children}
  </Element>
);

HeroHead.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

HeroHead.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
  renderAs: 'div'
};

export default HeroHead;
