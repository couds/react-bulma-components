import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const LevelSide = ({
  children,
  className,
  renderAs,
  align,
  ...props
}) => {
  const Element = renderAs;
  return (
    <Element
      {...props}
      className={classnames(className, {
        [`level-${align}`]: align,
      })}
    >
      {children}
    </Element>
  );
};
LevelSide.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  align: PropTypes.string,
};

LevelSide.defaultProps = {
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
  align: 'left',
};

export default LevelSide;
