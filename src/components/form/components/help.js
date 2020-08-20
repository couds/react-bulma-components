import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';

import CONSTANTS from '../../../constants';
import Element from '../../element';

const colors = [null].concat(Object.values(CONSTANTS.COLORS));

const Help = ({ className, children, color, ...props }) => (
  <Element
    {...props}
    className={classnames('help', className, {
      [`is-${color}`]: color,
    })}
  >
    {children}
  </Element>
);

Help.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  children: PropTypes.node,
};

Help.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: undefined,
  color: undefined,
  renderAs: 'p',
};

export default Help;
