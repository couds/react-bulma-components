import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const LevelSide = ({
  children,
  className,
  style,
  renderAs,
  align,
}) => {
  const Element = renderAs;
  return (
    <Element
      style={style}
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
  style: PropTypes.object,
  renderAs: PropTypes.string,
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
