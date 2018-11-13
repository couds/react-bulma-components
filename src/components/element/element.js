import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../modifiers';

const Element = React.forwardRef(({
  className,
  renderAs,
  ...allProps
}, ref) => {
  const RenderAs = renderAs;
  const props = modifiers.clean(allProps);
  return (
    <RenderAs
      ref={ref}
      className={classnames(className, modifiers.classnames(allProps)) || undefined}
      {...props}
    />
  );
});

Element.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
};

Element.defaultProps = {
  ...modifiers.defaultProps,
  className: undefined,
  style: undefined,
  renderAs: 'div',
};

export default Element;
