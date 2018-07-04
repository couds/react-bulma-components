import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CONSTANTS from '../../constants';
import LevelSide from './components/level-side';
import LevelItem from './components/level-item';

const breakpoints = [null].concat(Object.keys(CONSTANTS.BREAKPOINTS).map(key => CONSTANTS.BREAKPOINTS[key]));

const Level = ({
  children,
  className,
  breakpoint,
  renderAs,
  ...props
}) => {
  const Element = renderAs;
  return (
    <Element
      {...props}
      className={classnames('level', className, {
        [`is-${breakpoint}`]: breakpoint,
      })}
    >
      {children}
    </Element>
  );
};

Level.Side = LevelSide;

Level.Item = LevelItem;

Level.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  breakpoint: PropTypes.oneOf(breakpoints),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

Level.defaultProps = {
  children: null,
  className: '',
  style: {},
  breakpoint: null,
  renderAs: 'div',
};

export default Level;
