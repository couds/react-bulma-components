import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../element';

const Tile = ({
  children,
  className,
  kind,
  vertical,
  size,
  color,
  ...props
}) => {
  return (
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
};

Tile.propTypes = {
  kind: PropTypes.oneOf(['ancestor', 'parent', 'child']),
  vertical: PropTypes.bool,
  size: PropTypes.oneOfType([
    PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default Tile;
