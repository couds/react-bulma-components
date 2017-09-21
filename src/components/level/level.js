import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CONSTANTS from '../../constants';
import LevelSide from './level-side';
import LevelItem from './level-item';


const breakpoints = [null].concat(Object.keys(CONSTANTS.BREAKPOINTS).map(key => CONSTANTS.BREAKPOINTS[key]));

const Level = ({
  children,
  className,
  style,
  breakpoint,
  renderAs,
}) => {
  const Element = renderAs;
  return (
    <Element
      style={style}
      className={classnames('level', className, {
        [`is-${breakpoint}`]: breakpoint,
      })}
    >
      {children}
    </Element>
  );
};

Level.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  breakpoint: PropTypes.oneOf([breakpoints]),
  renderAs: PropTypes.string,
};

Level.defaultProps = {
  children: null,
  className: '',
  style: {},
  breakpoint: null,
  renderAs: 'div',
};

Level.Side = LevelSide;
Level.Item = LevelItem;

export default Level;
