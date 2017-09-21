import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


import CONSTANTS from '../../../constants';
import events from '../../../modifiers/events';

const colors = [null].concat(Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]));

const Textarea = ({
  className,
  style,
  size,
  color,
  readOnly,
  disabled,
  placeholder,
  rows,
  value,
  ...props
}) => (
  <textarea
    {...events.props(props)}
    value={value}
    rows={rows}
    style={style}
    placeholder={placeholder}
    readOnly={readOnly}
    disabled={disabled}
    className={classnames('textarea', className, {
      [`is-${size}`]: size,
      [`is-${color}`]: color,
    })}
  />
);

Textarea.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(colors),
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  value: PropTypes.string,
  ...events.propTypes,
};

Textarea.defaultProps = {
  className: '',
  style: {},
  size: null,
  color: null,
  readOnly: false,
  disabled: false,
  placeholder: '',
  rows: 4,
  value: '',
  ...events.defaultProps,
};

export default Textarea;
