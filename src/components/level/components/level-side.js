import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';
import Element from '../../element';

const LevelSide = ({
  children,
  className,
  align,
  ...props
}) => (
  <Element
    {...props}
    className={classnames(className, {
      [`level-${align}`]: align,
    })}
  >
    {children}
  </Element>
);
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
