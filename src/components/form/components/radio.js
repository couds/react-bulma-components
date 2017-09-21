import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import events from '../../../modifiers/events';

const Radio = ({
  className,
  style,
  disabled,
  checked,
  value,
  name,
  children,
  ...props
}) => (
  <label
    disabled={disabled}
    className={classnames('radio', className)}
    style={style}
  >
    <input
      {...events.props(props)}
      name={name}
      checked={checked}
      type="radio"
      value={value}
      disabled={disabled}
    />
    {children}
  </label>
);

Radio.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  ...events.propTypes,
};

Radio.defaultProps = {
  children: null,
  className: '',
  value: '',
  style: {},
  disabled: false,
  checked: false,
  ...events.defaultProps,
};

export default Radio;
