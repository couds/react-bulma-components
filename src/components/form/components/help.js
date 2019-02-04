import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../../constants';
import modifiers from '../../../modifiers';
import Element from '../../element';

const colors = [null].concat(Object.values(CONSTANTS.COLORS));

const Help = React.forwardRef(({ className, children, color, ...props }, ref) => (
  <Element
    {...props}
    ref={ref}
    className={cn('help', className, {
      [`is-${color}`]: color
    })}
  >
    {children}
  </Element>
));

Help.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  children: PropTypes.node
};

Help.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  color: null,
  renderAs: 'p'
};

export default Help;
