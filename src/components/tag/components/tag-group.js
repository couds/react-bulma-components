import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../modifiers';

export const TagGroup = React.forwardRef(({ children, className, gapless, ...allProps }, ref) => {
  const props = modifiers.clean(allProps);
  return (
    <span
      {...props}
      ref={ref}
      className={cn('tags', modifiers.classnames(allProps), className, {
        'has-addons': gapless
      })}
    >
      {children}
    </span>
  );
});

TagGroup.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  gapless: PropTypes.bool
};

TagGroup.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
  gapless: false
};
