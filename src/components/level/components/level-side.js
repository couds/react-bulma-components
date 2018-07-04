import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';

const LevelSide = ({
  children,
  className,
  renderAs,
  align,
  ...allProps
}) => {
  const Element = renderAs;
  const props = modifiers.clean(allProps);
  return (
    <Element
      {...props}
      className={classnames(className, modifiers.classnames(allProps), {
        [`level-${align}`]: align,
      })}
    >
      {children}
    </Element>
  );
};
LevelSide.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  align: PropTypes.string,
};

LevelSide.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
  align: 'left',
};

export default LevelSide;
