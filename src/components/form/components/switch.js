import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CONSTANTS from '../../../constants';
import modifiers from '../../../modifiers';

import './switch.sass';

const colors = Object.values(CONSTANTS.COLORS);

export const Switch = ({ className, style, disabled, value, children, checked, name, ...allProps }) => {
  const props = modifiers.clean(allProps);
  const [isMouseDown, setMouseDown] = useState(false);
  return (
    <label
      className={cn('switch', modifiers.getClassName(allProps), className)}
      style={style}
      onMouseDown={() => setMouseDown(true)}
      onMouseUp={() => setMouseDown(false)}
      onMouseOut={() => setMouseDown(false)}
      disabled={disabled}
    >
      <input {...props} name={name} type="checkbox" value={value} disabled={disabled} checked={checked} />
      <span className={cn('check', { 'is-elastic': isMouseDown && !disabled })} />
      <span className="control-label">{children}</span>
    </label>
  );
};

Switch.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  color: PropTypes.oneOf(colors),
  disabled: PropTypes.bool,
  value: PropTypes.string,
  checked: PropTypes.bool,
  name: PropTypes.string
};

Switch.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  value: '',
  color: null,
  style: {},
  disabled: false,
  checked: false,
  name: null
};
