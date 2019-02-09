import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../modifiers';

export const Tags = React.forwardRef(({ children, className, gapless, ...allProps }, ref) => {
  const props = modifiers.clean(allProps);
  return (
    <span
      {...props}
      ref={ref}
      className={cn('tags', modifiers.getClassName(allProps), className, {
        'has-addons': gapless
      })}
    >
      {children}
    </span>
  );
});

Tags.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  gapless: PropTypes.bool
};

Tags.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
  gapless: false
};
