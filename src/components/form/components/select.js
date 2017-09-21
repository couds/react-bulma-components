import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


import CONSTANTS from '../../../constants';
import events from '../../../modifiers/events';

const colors = [null].concat(Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]));

const Select = ({
  className,
  style,
  size,
  color,
  readOnly,
  disabled,
  value,
  multiple,
  children,
  ...props
}) => (
  <div
    className={classnames('select', className, {
      [`is-${size}`]: size,
      [`is-${color}`]: color,
      'is-multiple': multiple,
    })}
    style={style}
  >
    <select
      {...events.props(props)}
      multiple={multiple}
      value={value}
      readOnly={readOnly}
      disabled={disabled}
    >
      {children}
    </select>
  </div>
);

Select.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(colors),
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  value: PropTypes.string,
  ...events.propTypes,
};

Select.defaultProps = {
  children: null,
  className: '',
  value: '',
  style: {},
  size: null,
  color: null,
  readOnly: false,
  disabled: false,
  multiple: false,
  ...events.defaultProps,
};

export default Select;
