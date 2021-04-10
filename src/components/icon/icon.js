import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import CONSTANTS from '../../constants';
import Element from '../element';

const colors = [undefined].concat(Object.values(CONSTANTS.COLORS));

const Icon = ({ size, color, className, align, text, ...props }) => (
  <Element
    {...props}
    className={classnames('icon', className, {
      [`is-${size}`]: size,
      [`is-${align}`]: align,
      [`has-text-${color}`]: color,
      'icon-text': text,
    })}
  />
);

Icon.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large', 'auto']),
  /**
   * Used when the icon is inside a `Form.Control`
   */
  align: PropTypes.oneOf(['left', 'right']),
  color: PropTypes.oneOf(colors),
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

Icon.defaultProps = {
  renderAs: 'span',
};

export default Icon;
