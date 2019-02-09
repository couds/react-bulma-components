import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../modifiers';

export const Element = React.forwardRef(({ className, renderAs, ...allProps }, ref) => {
  const RenderAs = renderAs;
  const props = modifiers.clean(allProps);
  return <RenderAs ref={ref} className={cn(className, modifiers.getClassName(allProps)) || undefined} {...props} />;
});

Element.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

Element.defaultProps = {
  ...modifiers.defaultProps,
  className: '',
  style: {},
  renderAs: 'div'
};
