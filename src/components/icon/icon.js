import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../modifiers';
import CONSTANTS from '../../constants';

const colors = [null].concat(Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]));

const Icon = ({
  icon,
  size,
  color,
  className,
  align,
  children,
  ...allProps
}) => {
  const props = modifiers.clean(allProps);
  return (
    <span
      {...props}
      className={classnames('icon', modifiers.classnames(allProps), className, {
        [`is-${size}`]: size,
        [`is-${align}`]: align,
        [`has-text-${color}`]: color,
      })}
    >
      { children || (
      <i
        className={classnames('rbc', {
          [`rbc-${icon}`]: icon,
        })}
      />
      )}
    </span>
  );
};

Icon.propTypes = {
  ...modifiers.propTypes,
  icon: PropTypes.string,
  children: PropTypes.element,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'auto']),
  align: PropTypes.oneOf(['left', 'right']),
  color: PropTypes.oneOf(colors),
};

Icon.defaultProps = {
  ...modifiers.defaultProps,
  className: '',
  style: {},
  size: null,
  color: null,
  children: null,
  align: null,
  icon: null,
};

export default Icon;
