import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import LevelSide from './components/level-side';
import LevelItem from './components/level-item';

import Element from '../element';

const Level = ({ children, className, breakpoint, ...props }) => (
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
  ...Element.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  breakpoint: PropTypes.oneOf(['mobile']),
};

export default Level;
