import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';

import '@mdi/font/css/materialdesignicons.css';

const colors = Object.values(CONSTANTS.COLORS);

const iconSizes = {
  auto: null,
  small: 'mdi-18px',
  medium: 'mdi-24px',
  large: 'mdi-36px',
  big: 'mdi-48px'
};

export const Icon = React.forwardRef(
  ({ icon, iconSize, size, color, className, align, children, ...allProps }, ref) => {
    const props = modifiers.clean(allProps);
    const _iconSize = iconSize ? iconSizes[iconSize] : size ? iconSizes[size] : undefined;
    return (
      <span
        {...props}
        className={cn('icon', modifiers.classnames(allProps), className, {
          [`is-${size}`]: size,
          [`is-${align}`]: align,
          [`has-text-${color}`]: color
        })}
      >
        {children || (
          <i
            ref={ref}
            className={cn('mdi', {
              [`mdi-${icon}`]: icon,
              [`mdi-${_iconSize}`]: _iconSize
            })}
          />
        )}
      </span>
    );
  }
);

Icon.propTypes = {
  ...modifiers.propTypes,
  icon: PropTypes.string,
  iconSize: PropTypes.oneOf(['small', 'medium', 'large', 'big', 'auto']),
  children: PropTypes.element,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  size: PropTypes.oneOf(Object.values(CONSTANTS.SIZES)),
  align: PropTypes.oneOf(['left', 'right']),
  color: PropTypes.oneOf(colors)
};

Icon.defaultProps = {
  ...modifiers.defaultProps,
  className: '',
  style: {},
  size: null,
  color: null,
  children: null,
  align: 'auto',
  icon: undefined,
  iconSize: undefined
};
