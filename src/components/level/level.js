import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CONSTANTS from '../../constants';
import LevelSide from './components/level-side';
import LevelItem from './components/level-item';
import modifiers from '../../modifiers';
import Element from '../element';
import renderAsShape from '../../modifiers/render-as';

const breakpoints = [null].concat(Object.keys(CONSTANTS.BREAKPOINTS).map((key) => CONSTANTS.BREAKPOINTS[key]));

const Level = ({
  children,
  className,
  breakpoint,
  ...props
}) => (
  <Element
    {...props}
    className={classnames('level', className, {
      [`is-${breakpoint}`]: breakpoint,
    })}
  >
    {children}
  </Element>
);

Level.Side = LevelSide;

Level.Item = LevelItem;

Level.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  breakpoint: PropTypes.oneOf(breakpoints),
  renderAs: renderAsShape,
};

Level.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: undefined,
  style: undefined,
  breakpoint: undefined,
  renderAs: 'div',
};

export default Level;
