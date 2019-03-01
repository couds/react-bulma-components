import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';
import Element from '../element';

const colors = [null].concat(Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]));

const Tile = ({
  children,
  className,
  kind,
  vertical,
  size,
  color,
  notification,
  ...props
}) => (
  <Element
    {...props}
    className={classnames(
      'tile', className, {
        notification,
        [`is-${kind}`]: kind,
        [`is-${size}`]: size,
        [`is-${color}`]: color,
        'is-vertical': vertical,
      })
        }
  >
    {children}
  </Element>
);

Tile.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  kind: PropTypes.oneOf(['ancestor', 'parent', 'child']),
  vertical: PropTypes.bool,
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  color: PropTypes.oneOf(colors),
  notification: PropTypes.bool,
};

Tile.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
  kind: null,
  vertical: false,
  size: null,
  color: null,
  notification: false,
};

export default Tile;
