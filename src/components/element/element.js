import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../modifiers';

const Element = ({
  className,
  renderAs,
  domRef,
  ...allProps
}) => {
  const RenderAs = renderAs;
  const props = modifiers.clean(allProps);
  return (
    <RenderAs
      ref={domRef}
      className={classnames(className, modifiers.classnames(allProps)) || undefined}
      {...props}
    />
  );
};

Element.propTypes = {
  ...modifiers.propTypes,
  /**
   * Reference to Dom element
   */
  domRef: PropTypes.object,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object,
  ]),
};

Element.defaultProps = {
  ...modifiers.defaultProps,
  domRef: undefined,
  className: undefined,
  style: undefined,
  renderAs: 'div',
};

export default Element;
