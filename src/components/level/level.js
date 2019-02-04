import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';
import Element from '../element';
import LevelItem from './components/level-item';
import LevelSide from './components/level-side';

const breakpoints = [null].concat(Object.values(CONSTANTS.BREAKPOINTS));

const Level = React.forwardRef(({ children, className, breakpoint, ...props }, ref) => (
  <Element
    {...props}
    ref={ref}
    className={cn('level', className, {
      [`is-${breakpoint}`]: breakpoint
    })}
  >
    {children}
  </Element>
));

Level.Side = LevelSide;

Level.Item = LevelItem;

Level.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  breakpoint: PropTypes.oneOf(breakpoints),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

Level.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
  breakpoint: null,
  renderAs: 'div'
};

export default Level;
