import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import events from '../../../modifiers/events';

const Checkbox = ({
  className,
  style,
  disabled,
  value,
  children,
  checked,
  ...props
}) => (
  <label
    disabled={disabled}
    className={classnames('checkbox', className)}
    style={style}
  >
    <input
      {...events.props(props)}
      type="checkbox"
      value={value}
      disabled={disabled}
    />
    {children}
  </label>
);

Checkbox.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  checked: PropTypes.bool,
  ...events.propTypes,
};

Checkbox.defaultProps = {
  children: null,
  className: '',
  value: '',
  style: {},
  disabled: false,
  checked: false,
  ...events.defaultProps,
};

export default Checkbox;
