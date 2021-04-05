import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

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
  color: PropTypes.oneOf(colors),
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

Help.defaultProps = {
  renderAs: 'p',
};

export default Help;
