import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';

const colors = Object.values(CONSTANTS.COLORS);

const iconSizes = {
  mdi: {
    auto: null,
    small: 'mdi-18px',
    medium: 'mdi-24px',
    large: 'mdi-36px',
    big: 'mdi-48px'
  },
  fas: {
    auto: null,
    small: null,
    medium: 'fa-lg',
    large: 'fa-2x',
    big: 'fa-3x'
  }
};

export const Icon = React.forwardRef(
  ({ icon, iconSize, size, color, className, align, children, pack, ...allProps }, ref) => {
    const props = modifiers.clean(allProps);
    const iconSizeOf = iconSize ? iconSizes[pack][iconSize] : size ? iconSizes[pack][size] : undefined;
    const iconPack =
      pack === 'mdi'
        ? cn('mdi', {
            [`mdi-${icon}`]: icon,
            [`mdi-${iconSizeOf}`]: iconSizeOf
          })
        : pack === 'fas'
        ? cn('fas', {
            [`fa-${icon}`]: icon,
            [`fa-${iconSizeOf}`]: iconSizeOf
          })
        : '';
    return (
      <span
        {...props}
        className={cn('icon', modifiers.getClassName(allProps), className, {
          [`is-${size}`]: size,
          [`is-${align}`]: align,
          [`has-text-${color}`]: color
        })}
      >
        {children || <i ref={ref} className={iconPack} />}
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
  pack: PropTypes.oneOf(['mdi', 'fas']),
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
  iconSize: undefined,
  pack: 'mdi'
};
