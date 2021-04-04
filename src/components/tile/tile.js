import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CONSTANTS from '../../constants';

import Element from '../element';

const colors = [null].concat(Object.values(CONSTANTS.COLORS));

const Tile = ({
  children,
  className,
  kind,
  vertical,
  size,
  color,
  ...props
}) => (
  <Element
    {...props}
    className={classnames('tile', className, {
      [`is-${kind}`]: kind,
      [`is-${size}`]: size,
      [`is-${color}`]: color,
      'is-vertical': vertical,
    })}
  >
    {children}
  </Element>
);

Tile.propTypes = {
  ...Element.propTypes,
  kind: PropTypes.oneOf(['ancestor', 'parent', 'child']),
  vertical: PropTypes.bool,
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  color: PropTypes.oneOf(colors),
  notification: PropTypes.bool,
};

export default Tile;
